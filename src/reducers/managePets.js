export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter(function(f){return f.id !== action.id})}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){
  let listItems = state.pets.map(function(pet){return `<li>${pet.name}</li>`})
  let html = `<ul>${listItems.join('')}</ul>`
  document.getElementById("container").innerHTML = html;
}
