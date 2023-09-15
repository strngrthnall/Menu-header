import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = '#1B8CFD'
  buttonText: string = 'Acessar';
  buttonNumber: number = 1;
  buttontexts: ['Comprar', 'Vender'];
  buttonObject = {
    label: 'Adicionar ao carrinho'
  }

  getAlert(num: number) {
    if(this.label == 'Carrinho'){
      alert(num + ' itens no carrinho')
    } else if (this.label == 'Vender') {
      alert('Venda realizada com sucesso!')
    } else if (this.label == 'Comprar') {
      alert('Compra realizada com sucesso!')
    } else {
      alert('Conectado')
    }
  }
}