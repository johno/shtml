const shtml = require('./')

console.log(shtml`
<div>
  <p>
    <bold>Hello, world!</bold>
  </p>
  <br>
  <p>
    <dim>
     shtml allows you to write html to the
     terminal using chalk.
    </dim>
  </p>
  <br>
  <rainbow><hr></rainbow>
  <br>
  <p>
    <dim>
     Currently only a handful of elements are supported,
     but you can expect more to be added periodically.
     <br><br>
     See below for some of the supported tags:
    </dim>
  </p>
  <ul>
    <li>p</li>
    <li>br</li>
    <li>hr</li>
    <li>ul</li>
    <li><bold>bold</bold></li>
    <li><bold>bold</bold></li>
    <li><dim>dim</dim></li>
    <li><rainbow>rainbow</rainbow></li>
    <li><underline>underline</underline></li>
    <li><magenta>magenta</magenta></li>
    <li><green>green</green></li>
    <li><blue>blue</blue></li>
    <li><gray>gray</gray></li>
    <li><yellow>yellow</yellow></li>
    <li><red>red</red></li>
  </ul>
</div>`)
