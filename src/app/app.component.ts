import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TuiInputModule } from "@taiga-ui/kit";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, ReactiveFormsModule, TuiInputModule, TuiTextfieldControllerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  control = new FormControl('');
}

