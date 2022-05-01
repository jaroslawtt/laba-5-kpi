class SortingStation{
    private _storage = new Storage();
    sortTrash(trashPacket: Trash[]):void{
        for (let packet of trashPacket) {
            switch (packet.constructor) {
                case Plastic:{
                    this._trashBox.plasticBox.push(packet);
                    break;
                }
                case Organic:{
                    this._trashBox.organicBox.push(packet);
                    break;
                }
                case Metal: {
                    this._trashBox.metalBox.push(packet);
                    break;
                }
                case Paper: {
                    this._trashBox.paperBox.push(packet);
                    break;
                }
            }
        }
    }
    private _trashBox = new TrashBox();
    get trashBox(){
        return this._trashBox;
    }
    cleanOutTrashBox(storage: Storage){
        for (let packets in this._trashBox) {
            for (let packet of this._trashBox[packets]) {
                storage.put(packet,packet.date);
            }
        }
        this._trashBox.clearBoxes();
    }
}
abstract class Trash {
    abstract size: number;
    abstract date: string;
    sorted: boolean = false;
    trashPassport():string{
        return `Garbage:
Type: ${(this as any).constructor.name};
Size: ${this.size}
Date: ${this.date}         
`
    }
}
class Plastic extends Trash{
    constructor(public size: number, public date: string) {
        super();
    }
}
class Paper extends Trash{
    constructor(public size: number, public date: string) {
        super();
    }
}
class Metal extends Trash{
    constructor(public size: number, public date: string) {
        super();
    }
}
class Organic extends Trash{
    constructor(public size: number, public date: string) {
        super();
    }
}
// @ts-ignore
class Storage{
    main: object = {
        'Plastic': {},
        'Organic': {},
        'Metal': {},
        'Paper': {},
    }
    put(packet: Trash, date: string){
        if(this.main[(packet as any).constructor.name][date]){
            packet.sorted = true;
            this.main[(packet as any).constructor.name][date].push(packet);
        }
        else{
            packet.sorted = true;
            this.main[(packet as any).constructor.name][date] = [packet];
        }
    }
}
class TrashBox{
    plasticBox: Plastic[] = [];
    organicBox: Organic[] = [];
    metalBox: Metal[] = [];
    paperBox: Paper[] = [];
    clearBoxes(){
        for (let boxName in this) {
            (this[boxName] as any).length = 0;
        }        
    }
}
