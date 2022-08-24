## This library was copied from [https://github.com/webcat12345/ngx-ui-switch](https://github.com/webcat12345/ngx-ui-switch)

We use this library, and it seems that it takes several months for the owners to update after a major version Angular update.

# Angular UI Switch Component

## Description

This is a simple iOS 7 style switch component for [Angular](https://angular.io).

Live [demo](https://webcat12345.github.io/ngx-ui-switch/demo/)

A [stackblitz](https://stackblitz.com) is also available [here](https://stackblitz.com/edit/ngx-ui-switch)

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) in [Angular](https://angular.io).

## Installation

npm: `npm install olt-ngx-ui-switch`

yarn: `yarn add olt-ngx-ui-switch`

## Usage

- Import into a module (`AppModule` example below)

```typescript
// app.module.ts
import { OltUiSwitchModule } from "olt-ngx-ui-switch";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, OltUiSwitchModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Add default css file to appropriate project(s) `angular.json`

```json
"styles": [
  "src/styles.css",
  "./node_modules/olt-ngx-ui-switch/ui-switch.component.css"
]
```

Alternatively, the scss version can be imported into a scss file:

```scss
@import "~olt-ngx-ui-switch/ui-switch.component.scss";
```

## Global config

Use when you want to change default values globally.

These settings will override anything passed in via property bindings.

```javascript
import { OltUiSwitchModule } from "olt-ngx-ui-switch";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    OltUiSwitchModule.forRoot({
      size: "small",
      color: "rgb(0, 189, 99)",
      switchColor: "#80FFA2",
      defaultBgColor: "#00ACFF",
      defaultBoColor: "#476EFF",
      checkedLabel: "on",
      uncheckedLabel: "off",
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<olt-ui-switch></olt-ui-switch>
```

# Two way binding

```html
<olt-ui-switch [(ngModel)]="enable"></olt-ui-switch>
```

# Params

### checked

> type: _boolean_

> default: false

```html
<olt-ui-switch checked></olt-ui-switch>
<olt-ui-switch [checked]="false"></olt-ui-switch>
```

### disabled

> type: _boolean_

> default: false

```html
<olt-ui-switch disabled></olt-ui-switch>
<olt-ui-switch checked [disabled]="true"></olt-ui-switch>
```

### loading

_Show a loading state for the toggle button when true. Often utilized with beforeChange._

> type: _boolean_

> default: false

```html
<olt-ui-switch [loading]="isLoading">
  <i class="fa fa-spinner fa-pulse" *ngIf="isLoading"></i>
</olt-ui-switch>
```

### change

> type: _boolean_

> default: noop

```html
<olt-ui-switch (change)="onChange($event)"></olt-ui-switch>
```

### changeEvent

> type: _MouseEvent_

> default: noop

```html
<olt-ui-switch (changeEvent)="onChangeEvent($event)"></olt-ui-switch>
<olt-ui-switch (changeEvent)="$event.stopPropagation()"></olt-ui-switch>
```

### valueChange

> type: _boolean_

> default: noop

```html
<olt-ui-switch (valueChange)="onValueChange($event)"></olt-ui-switch>
```

### beforeChange

Utilize an observable to check that the toggle event should complete

> type: _Observable\<boolean\>_

> default: noop

```html
<olt-ui-switch [beforeChange]="OnBeforeChange"> </olt-ui-switch>
```

```typescript
OnBeforeChange: Observable<boolean> = new Observable((observer) => {
  const timeout = setTimeout(() => {
    observer.next(true);
  }, 2000);
  return () => clearTimeout(timeout);
});
```

### size

> type: _string_

> default: medium

```html
<olt-ui-switch size="small"></olt-ui-switch>
<olt-ui-switch size="large"></olt-ui-switch>
```

### reverse

> type: _boolean_

> default: false

```html
<olt-ui-switch reverse></olt-ui-switch>
```

### color

> type: _string_

> default: rgb(100, 189, 99)

```html
<olt-ui-switch color="red"></olt-ui-switch>
```

### switchColor

> type: _string_

> default: #fff

```html
<olt-ui-switch switchColor="#fcfcfc"></olt-ui-switch>
```

### defaultBgColor

Default background color

> type: _string_

> default: #fff

```html
<olt-ui-switch defaultBgColor="red"></olt-ui-switch>
```

### defaultBoColor

_Default border color_

> type: _string_

> default: #dfdfdf

```html
<olt-ui-switch defaultBoColor="black"></olt-ui-switch>
```

### checkedLabel

_Checked label (on)_

> type: _string_

> default: null

```html
<olt-ui-switch checkedLabel="on"></olt-ui-switch>
```

### uncheckedLabel

_Unchecked label (off)_

> type: _string_

> default: null

```html
<olt-ui-switch uncheckedLabel="off"></olt-ui-switch>
```

### checkedTextColor

checked text color of the label (on)

> type: _string_

> default: black

```html
<olt-ui-switch checkedTextColor="#7CFC00"></olt-ui-switch>
```

### uncheckedTextColor

Unchecked text color of the label (off)

> type: _string_

> default: black

```html
<olt-ui-switch uncheckedTextColor="red"></olt-ui-switch>
```

## Switch Content

```html
<olt-ui-switch uncheckedLabel="off">
  <img src="" />
</olt-ui-switch>
```
