import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

import { environment } from "../environments/environment";
import {ChunkDataIf, RequestChunkIf} from "@guiexpert/table";



@WebSocketGateway(environment.websocketPort, environment.websocketOptions)
export class FindGateway {

  @WebSocketServer()
  server: Server;

  private readonly cancellings = {};


  @SubscribeMessage("find")
  find(@MessageBody() findData: RequestChunkIf): void {

    const dirEvent:ChunkDataIf<any> = {
      ...findData,
      rows: ['dies', 'ist', 'ein', 'Test', findData.queryId]
    };
    this.server.emit(findData.emmitDataKey, dirEvent);
  }

  @SubscribeMessage("cancelfind")
  cancelFind(@MessageBody() cancelId: string): void {
    this.cancellings[cancelId] = cancelId;
  }


}
