import {Socket} from "ngx-socket-io";
import {Subscription} from "rxjs";
import {ChunkDataIf, RequestChunkIf} from "@guiexpert/table";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class LoadChunkSocketService {


  private cancellings: { [key: string]: Subscription } = {};
  private cache: { [key: string]: ChunkDataIf<any> } = {};


  constructor(
    private readonly socket: Socket
  ) {
  }


  public cancelLoad(cancelKey: string) {
    this.socket.emit("cancelfind", cancelKey);
    const subscription = this.cancellings[cancelKey];
    if (subscription) {
      subscription.unsubscribe();
    }
  }


  public requestChunk<T>(
    requestChunk: RequestChunkIf,
    callback: (event: ChunkDataIf<T>) => void
  ): void {

    if (this.cache[requestChunk.emmitDataKey]) {
      callback(this.cache[requestChunk.emmitDataKey]);
      return; // cache hit
    }
    this.cancellings[requestChunk.emmitCancelKey] = this.socket
      .fromEvent<ChunkDataIf<T>>(requestChunk.emmitDataKey)
      .subscribe(wd => {
        this.cache[requestChunk.emmitDataKey] = wd;
        callback(wd);
      });
    this.socket.emit("find", requestChunk);
  }

  public setupSocketConnection() {
    // nix
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

}
