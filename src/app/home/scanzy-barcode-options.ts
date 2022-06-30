export enum ScanzyBarcodeFormat {
    Code128 = "Code128",
    Code39 = "Code39",
    Code93 = "Code93",
    CodaBar = "CodaBar",
    DataMatrix = "DataMatrix",
    EAN13 = "EAN13",
    EAN8 = "EAN8",
    ITF = "ITF",
    QRCode = "QRCode",
    UPCA = "UPCA",
    UPCE = "UPCE",
    PDF417 = "PDF417",
    Aztec = "Aztec",
    MaxiCode = "MaxiCode"
}
export class ScanzyBarcodeOptions {
    enableBeep: boolean
    enableVibrate: boolean
    enableAutoZoom: boolean
    enableScanRectOnly: boolean
    formats: ScanzyBarcodeFormat[]
    constructor(enableBeep, enableVibrate, enableAutoZoom, enableScanRectOnly, formats) {
        this.enableBeep = enableBeep;
        this.enableVibrate = enableVibrate;
        this.enableAutoZoom = enableAutoZoom;
        this.enableScanRectOnly = enableScanRectOnly;
        this.formats = formats;
    }
}
