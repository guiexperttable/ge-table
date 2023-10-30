import {
  AreaObjectMap,
  CellRendererIf,
  ColumnDef,
  ColumnDefIf,
  px100,
  px120,
  px150,
  px250,
  px300,
  TableFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";

export interface SimplePersonIf {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export function createTableRows(): SimplePersonIf[] {
  return [
    {
      "id": 1,
      "firstName": "Mirilla",
      "lastName": "Reide",
      "email": "mreide0@tripod.com",
      "gender": "Female",
      "ipAddress": "84.193.221.115"
    },
    {
      "id": 2,
      "firstName": "Lexie",
      "lastName": "Ouldcott",
      "email": "louldcott1@yahoo.co.jp",
      "gender": "Female",
      "ipAddress": "179.69.88.24"
    },
    {
      "id": 3,
      "firstName": "Muffin",
      "lastName": "Lisett",
      "email": "mlisett2@aboutads.info",
      "gender": "Female",
      "ipAddress": "86.37.98.14"
    },
    {
      "id": 4,
      "firstName": "Gertrudis",
      "lastName": "Mandrey",
      "email": "gmandrey3@nbcnews.com",
      "gender": "Genderfluid",
      "ipAddress": "15.39.203.38"
    },
    {
      "id": 5,
      "firstName": "Marlee",
      "lastName": "Russam",
      "email": "mrussam4@deliciousdays.com",
      "gender": "Agender",
      "ipAddress": "132.38.90.220"
    },
    {
      "id": 6,
      "firstName": "Romona",
      "lastName": "Winnett",
      "email": "rwinnett5@independent.co.uk",
      "gender": "Female",
      "ipAddress": "40.56.254.111"
    },
    {
      "id": 7,
      "firstName": "Hillary",
      "lastName": "Cranney",
      "email": "hcranney6@washington.edu",
      "gender": "Male",
      "ipAddress": "45.51.211.4"
    },
    {
      "id": 8,
      "firstName": "Pat",
      "lastName": "Ribbon",
      "email": "pribbon7@tiny.cc",
      "gender": "Male",
      "ipAddress": "182.47.199.240"
    },
    {
      "id": 9,
      "firstName": "Linzy",
      "lastName": "Olensby",
      "email": "lolensby8@free.fr",
      "gender": "Female",
      "ipAddress": "99.184.96.163"
    },
    {
      "id": 10,
      "firstName": "Garold",
      "lastName": "Jocic",
      "email": "gjocic9@ocn.ne.jp",
      "gender": "Male",
      "ipAddress": "11.10.161.248"
    },
    {
      "id": 11,
      "firstName": "Jemie",
      "lastName": "O' Shea",
      "email": "josheaa@acquirethisname.com",
      "gender": "Genderfluid",
      "ipAddress": "212.229.101.149"
    },
    {
      "id": 12,
      "firstName": "Shandeigh",
      "lastName": "Umbers",
      "email": "sumbersb@google.ca",
      "gender": "Female",
      "ipAddress": "156.118.216.80"
    },
    {
      "id": 13,
      "firstName": "Rosamond",
      "lastName": "Bulluck",
      "email": "rbulluckc@imageshack.us",
      "gender": "Female",
      "ipAddress": "97.45.97.187"
    },
    {
      "id": 14,
      "firstName": "Elfie",
      "lastName": "Keelin",
      "email": "ekeelind@desdev.cn",
      "gender": "Female",
      "ipAddress": "105.68.243.40"
    },
    {
      "id": 15,
      "firstName": "Georges",
      "lastName": "Talbot",
      "email": "gtalbote@cnn.com",
      "gender": "Male",
      "ipAddress": "58.24.213.107"
    },
    {
      "id": 16,
      "firstName": "Alard",
      "lastName": "McGrane",
      "email": "amcgranef@adobe.com",
      "gender": "Male",
      "ipAddress": "100.71.86.142"
    },
    {
      "id": 17,
      "firstName": "Emmanuel",
      "lastName": "Chave",
      "email": "echaveg@washington.edu",
      "gender": "Male",
      "ipAddress": "81.77.217.55"
    },
    {
      "id": 18,
      "firstName": "Tobie",
      "lastName": "Passie",
      "email": "tpassieh@tripod.com",
      "gender": "Male",
      "ipAddress": "201.217.85.157"
    },
    {
      "id": 19,
      "firstName": "Nappie",
      "lastName": "Ridge",
      "email": "nridgei@wordpress.org",
      "gender": "Male",
      "ipAddress": "35.13.53.11"
    },
    {
      "id": 20,
      "firstName": "Meredeth",
      "lastName": "Siviter",
      "email": "msiviterj@google.com.hk",
      "gender": "Male",
      "ipAddress": "253.119.92.236"
    },
    {
      "id": 21,
      "firstName": "Abra",
      "lastName": "Hysom",
      "email": "ahysomk@123-reg.co.uk",
      "gender": "Female",
      "ipAddress": "119.247.49.190"
    },
    {
      "id": 22,
      "firstName": "Merwin",
      "lastName": "Leele",
      "email": "mleelel@blogtalkradio.com",
      "gender": "Male",
      "ipAddress": "170.61.225.163"
    }
  ];
}

export function createColumnDefs(): ColumnDefIf[] {
  return [
    new ColumnDef("firstName", "First Name", px120),
    new ColumnDef("lastName", "Last Name"),

    ColumnDef.create({
      property: "gender",
      headerLabel: "Gender",
      width: px100,
      bodyClasses: ["ge-table-text-align-left"]
    }),

    ColumnDef.create({
      property: "email",
      headerLabel: "Email",
      width: px300,
      bodyClasses: ["ge-table-text-align-left"]
    }),

    new ColumnDef("ipAddress", "IP", px150),

    ColumnDef.create({
      property: "id",
      headerLabel: "ID",
      width: px250,
      // bodyRenderer: actionRenderer,
      bodyClasses: ["ge-table-text-align-left"]
    })
  ];
}

export function createTableOptions(): TableOptions {
  const tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 40,
      body: 34,
      footer: 0
    }
  };
  return tableOptions;
}

export function createSimplePersonModel(): TableModelIf {
  const tableOptions = createTableOptions();
  const rows: SimplePersonIf[] = createTableRows();
  const columnDefs: ColumnDefIf[] = createColumnDefs();
  return TableFactory.createTableModel({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 0
  });
}

export function applyBodyRenderer(columnDef: ColumnDefIf, bodyRenderer: CellRendererIf) {
  columnDef.rendererMap = new AreaObjectMap<CellRendererIf>(undefined, bodyRenderer, undefined);
}
