<template>
  <div class="calculator">
      <Display :value="displayValue"/>
      <Button label="AC" triple @onclick="clearMemory"/>
      <Button label="/" operation @onclick="setOperation"/>
      <Button label="7" @onclick="addDigit"/>
      <Button label="8" @onclick="addDigit"/>
      <Button label="9" @onclick="addDigit"/>
      <Button label="*" operation @onclick="setOperation"/>
      <Button label="4" @onclick="addDigit"/>
      <Button label="5" @onclick="addDigit"/>
      <Button label="6" @onclick="addDigit"/>
      <Button label="-" operation @onclick="setOperation"/>
      <Button label="1" @onclick="addDigit"/>
      <Button label="2" @onclick="addDigit"/>
      <Button label="3" @onclick="addDigit"/>
      <Button label="+" operation @onclick="setOperation"/>
      <Button label="0" double @onclick="addDigit"/>
      <Button label="." @onclick="addDigit"/>
      <Button label="=" operation @onclick="setOperation"/>
  </div>
</template>

<script>
import Display from '../components/Display';
import Button from '../components/Button';

export default {
    data: function () {
        return {
            displayValue: "0",
            cleatDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data());
        },
        setOperation(o) {
            if(this.current === 0) {
                this.operation = o;
                this.current = 1;
                this.cleatDisplay = true;
            } else {
                const equals = o === '=';
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onerror', e);
                }

                this.values[1] = 0
                this.displayValue = this.values[0];
                this.operation = equals ? null : o;
                this.current = equals ? 0 : 1;
                this.cleatDisplay = !equals;
            }
        },
        addDigit(n) {
            if(n == '.' && this.displayValue.includes('.')) {
                return 
            }

            const cleatDisplay = this.displayValue === "0" || this.cleatDisplay;
            const currentValue = cleatDisplay ? "" : this.displayValue;
            const displayValue = currentValue + n;

            this.displayValue = displayValue;
            this.cleatDisplay = false;
            this.values[this.current] = displayValue;
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>