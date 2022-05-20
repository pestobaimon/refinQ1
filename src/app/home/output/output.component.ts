import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputComponent implements OnInit {
  @Input()
  output = false;
  constructor() {}

  ngOnInit(): void {}
}
