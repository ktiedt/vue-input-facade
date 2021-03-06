For times when you cannot use the component, you may use the directive instead. The directive has all the same features as the component, however the interface may not be as straight forward as using a component.  The `prefill` and `short` features may passed in to the directive as modifiers.

### Basic usage

```js
let value = '12A789MM'

<example label="Order number">
  <input type="text" v-model="value" v-facade="'XXX-###-AA'">
</example>

<display :value="value" />
```

### Accessing the unmasked value

You have access to the unmasked value via the input event.  The `unmaskedValue` property can be found as part of the `target` property of the input event.

> Note: Some 3rd party components may not pass the `event` parameter when emitting input, such is the case with vuetify's v-text-input.  In this case you can listen to the native event so you can still access the unmasked value.  ex: `v-on:input.native="handler"`.

```js
let event = ''

<example label="Enter your phone number">
  <input type="tel" v-facade="'(###) ### - ####'" v-on:input="event = $event">
</example>

<display :value="event" />
```

### Attaching to parent elements

When the the v-facade directive is attached to a non input element, it will attempt to find an input element within the children and attach it self to the first one it finds.  This allows you add the directive on other 3rd party components that house an input element.

```js
<div v-facade="'(###) ### - ####'">
  <p>Random elements in the way.</p>
  <example label="Enter your phone number">
    <input type="tel">
  </example>
</div>
```
