import test from 'ava'
import shtml from './'

test('shtml does something awesome', t => {
  t.plan(1)

  console.log(shtml`
    <red>Yay!</red>
  `)
  t.true(true)
})
