import test from 'ava'
import figures from 'figures'
import shtml from './'

test('templates correctly', t => {
  t.plan(1)

  const v = 'foo'
  const out = shtml`
    <p>
      <red>
        ${v}<br>
        <bgBlue>bar</bgBlue>
      </red>
    </p>
  `

  t.true(out.includes(v))
})

test('handles colors', t => {
  t.plan(2)

  const out = shtml`
    <p>
      <red>Foo</red>
      <bgCyan>Bar</bgCyan>
    </p>
  `

  t.true(out.includes('\u001b[31mFoo'))
  t.true(out.includes('\u001b[46mBar'))
})

test('handles modifiers', t => {
  t.plan(2)

  const out = shtml`
    <p>
      <bold>Foo</bold>
      <underline>Bar</underline>
    </p>
  `

  t.true(out.includes('\u001b[1mFoo'))
  t.true(out.includes('\u001b[4mBar'))
})

test('handles ul', t => {
  t.plan(2)

  const out = shtml`
    <ul>
      <li>Foo</li>
      <li>Bar</li>
    </ul>
  `

  t.false(out.includes('li'))
  t.true(out.includes(figures.bullet))
})

test('handles br', t => {
  t.plan(1)

  const out = shtml`<span><red>Foo</red><br></span>`
  t.true(out.includes('\n'))
})
