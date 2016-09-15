import fs from 'fs'
import test from 'ava'

import tachyonsBuildCss from '../'

const input = fs.readFileSync('fixtures/input.css', 'utf8')
const cssOutput = fs.readFileSync('fixtures/output.css', 'utf8').trim()
const cssMinOutput = fs.readFileSync('fixtures/output.min.css', 'utf8').trim()
const cssRepeatOutput = fs.readFileSync('fixtures/output.repeat.css', 'utf8').trim()
const cssWhitelistOutput = fs.readFileSync('fixtures/output.whitelist.css', 'utf8').trim()

test.cb('processes source code', t => {
  testFixture(t, input, cssOutput)
})

test.cb('processes source code and minifies css', t => {
  testFixture(t, input, cssMinOutput, { minify: true })
})

test.cb('processes source code and repeats classes', t => {
  testFixture(t, input, cssRepeatOutput, { repeat: 4 })
})

test.cb('processes source code and removes whitelist', t => {
  testFixture(t, input, cssWhitelistOutput, { 
    whitelist: ['bg-cv', 'bg-cv-ns', 'bg-cv-m', 'bg-cv-l'] 
  })
})

function testFixture (t, input, output, opts) {
  const result = tachyonsBuildCss(input, opts).then(result => {
    t.is(result.css.trim(), output)
    t.end()
  })
}
