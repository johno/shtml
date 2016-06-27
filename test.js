import test from 'ava'
import shtml from './'

test('shtml does something awesome', t => {
  t.plan(1)

  console.log(shtml`
    <p>
      <red>Yay!</red><br><br>
      <rainbow>Woooo!</rainbow>
      <ul>
        <li>Item <red>A</red></li>
        <li>Item B</li>
      </ul>
    </p>
  `)

  console.log(shtml`
    <ul>
      <li>Item A</li>
      <li>Item B</li>
    </ul>
  `)
  t.true(true)
})
