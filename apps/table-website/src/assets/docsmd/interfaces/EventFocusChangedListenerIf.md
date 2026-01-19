[@guiexpert/table](../README.md) / [Exports](../modules.md) / EventFocusChangedListenerIf

# Interface: EventFocusChangedListenerIf

`EventFocusChangedListenerIf` is an interface that defines a contract for classes that wish to listen for changes in focus in a
tabular data structure, such as a data grid or spreadsheet.
Listener classes should implement the `onFocusChanged` method which would be triggered whenever focus changes in the data grid.

## Overview
This interface ensures a consistent API for classes that need to react to changes in focus in the data grid.
The table grid or data grid components will typically iterate over an array of `EventFocusChangedListenerIf` listeners and
call the `onFocusChanged` method on each one when the focus within the grid changes.
This could be due to user interactions such as clicking on a different cell or programmatically changing the cell focus.

## Usage
Implement `EventFocusChangedListenerIf` if you want to create a class that reacts to changes in focus.

```typescript
class MyFocusChangeListener implements EventFocusChangedListenerIf {
  onFocusChanged(model: FocusModelIf): void {
    console.log('Focus changed: ', model.getFocus());
  }
}
```

Use the `addEventFocusChangedListener` method from `FocusModelIf` to add your listener to the queue.

```typescript
focusModel.addEventFocusChangedListener(new MyFocusChangeListener());
```

## See Also
- [FocusModelIf](./FocusModel.md) for focus management.
- [EventAdapter](./EventAdapter.md) for a class that implements this and other listener interfaces.

**`Method`**

onFocusChanged - method to be called with an instance of the `FocusModelIf` interface whenever a focus event occurs

## Hierarchy

- **`EventFocusChangedListenerIf`**

  ↳ [`EventListenerIf`](EventListenerIf.md)

## Implemented by

- [`TableScope`](../classes/TableScope.md)

## Table of contents

### Methods

- [onFocusChanged](EventFocusChangedListenerIf.md#onfocuschanged)

## Methods

### onFocusChanged

▸ **onFocusChanged**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FocusModelIf`](FocusModelIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/focus/event-focus-changed-listener.if.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/event-focus-changed-listener.if.ts#L40)
