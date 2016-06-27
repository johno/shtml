import test from 'ava'
import shtml from './'

test('shtml does something awesome', t => {
  t.plan(1)

  console.log(shtml`
    <p>
      <red>Yay!</red><br><br>
      <rainbow>Woooo!</rainbow>
    </p>
  `)
  t.true(true)
})
