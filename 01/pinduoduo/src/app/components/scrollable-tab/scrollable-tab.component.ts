import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, OnChanges {

  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = 'red';
  @Input() titleActiveColor = 'orange';
  @Input() titleColor = '#fff';
  @Input() indicatorColor = '#EEEED1';
  @Output() tabSelected = new EventEmitter();
  constructor() { console.log('组件构造调用');
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('输入属性改变', changes);
  }

  ngOnInit(): void {
    console.log('组件初始化');
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}



