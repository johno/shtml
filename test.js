import test from 'ava'
import figures from 'figures'
import shtml from './'

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

  const out = shtml`<span>Foo<br></span>`
  t.is(out, 'Foo\n')
})
