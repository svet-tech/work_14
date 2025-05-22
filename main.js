class Marker {
constructor(color, inkPercent){
    this.color = color;
    this.inkPercent = inkPercent;
}
printText(text){
    const maxSymbols = Math.floor(this.inkPercent/0.5);
    let printedSymbols = 0;
    let resultText = '';
    for (let ch of text) {
        if (ch !== ' ' && ch !== '\n' && ch !== '\t') {
          if (printedSymbols >= maxSymbols) {
            break;
          }
          this.inkPercent -= 0.5;
          printedSymbols++;
        }
        resultText += ch
}
console.log(`Цвет: ${this.color}`)
console.log(resultText);
console.log(`Остаток чернил: ${this.inkPercent.toFixed(2)}%\n`);
}
}
// Класс заправляемого маркера, наследует от SimpleMarker
class RefillableMarker extends Marker {
    refill() {
      this.inkPercent = 100;
      console.log(`Маркeр цвета ${this.color} заправлен до 100% чернил.\n`);
    }
  }
  
  // Демонстрация работы
  
  // Создаем простой маркер красного цвета с 10% чернил
  const marker1 = new Marker('Красный', 10);
  marker1.printText('Пример текста для печати.');
  
  // Создаем заправляемый маркер синего цвета с 50% чернил
  const refillableMarker = new RefillableMarker('Синий', 50);
  refillableMarker.printText('Это тестовая строка для заправляемого маркера.');
  
  // Заправляем маркер и снова печатаем
  refillableMarker.refill();
  refillableMarker.printText('После заправки можно продолжить печать.');