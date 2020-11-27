import { Selector, State } from '@ngxs/store';
import { IDish } from 'src/app/interfaces/dish/dish.interface';

export interface IRDish {
  dishes: IDish[];
}

@State<IRDish>({
  name: 'dishState',
  defaults: {
    dishes: [{ name: 'Tacos de pollo', price: 60, description: 'Deliciosos tacos de pollo con el sabor de siempre', id: 1, image: 'https://i.blogs.es/5a9394/tacos-de-pollo-encebollados/450_1000.jpg' },
    { name: 'Tacos de suadero', price: 50, description: 'Deliciosos tacos de suadero, tan ricos como siempre', id: 2, image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/06/receta-tacos-de-suadero.jpg' },
    { name: 'Tacos de longaniza', price: 50, description: 'Deliciosos tacos de longaniza, de aquella con la que se ahogo el de la pelicula de Coco', id: 3, image: 'https://lostacosdevilla.com/wp-content/uploads/2020/07/tacos-de-longaniza.jpg' },
    { name: 'Tacos de tripa', price: 55, description: 'Deliciosos tacos de tripa, suavecita o doradita', id: 4, image: 'https://rumbameats.com/wp-content/uploads/2017/10/43898_Rumba_Website_Recipe_Image_600x450_0000_Beef_Recipe_TripasTacos.jpg' },
    { name: 'Tacos de bistec', price: 70, description: 'Deliciosos tacos de bistec, tan suave que parece algo muy suave', id: 5, image: 'https://www.cocinavital.mx/wp-content/uploads/2020/09/tacos-de-bisteces-encebollados-634x420.jpg' }]
  }
})
export class DishState {
  constructor() { }
  @Selector()
  static getAllDishes(state: IRDish): IDish[] {
    return state.dishes;
  }
}
