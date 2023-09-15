import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const ColorPicker = () => {

  let presets = {
    'custom1': ['#ef9a9a', '#e57373', '#ef5350',
        '#f44336', '#f48fb1', '#f06292',
        '#ec407a', '#e91e63', '#ce93d8',
        '#ba68c8', '#ab47bc', '#9c27b0',
        '#b39ddb', '#9575cd', '#7e57c2', '#673AB7'],
    'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5',
        '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3',
        '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',
        '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],
    'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688',
        '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50',
        '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',
        '#DCE775', '#D4E157', '#CDDC39']
};

  function tileRender(args) {
    args.element.classList.add("e-icons");
    args.element.classList.add("e-custom-tile");
}
// riggers while selecting colors from palette.
function change(args) {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Color Picker" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <ColorPickerComponent id="inline-palette" mode="Palette"  modeSwitcher={false} inline showButtons={false} change={change}/>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <ColorPickerComponent id="inline-picker" mode="Picker" modeSwitcher={false} inline showButtons={false} change={change} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ColorPicker
