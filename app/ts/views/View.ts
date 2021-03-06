namespace Views{
    export abstract class View<T>{
        private _elemento: JQuery;
    
        constructor(seletor: string) {
            //this._elemento = document.querySelector(seletor);
            this._elemento = $(seletor);
        }
    
        update(model: T): void {
            //this._elemento.innerHTML = this.template(model);
            this._elemento.html(this.template(model));
        }
    
        abstract template(model: T): string;
    
    
    }
}