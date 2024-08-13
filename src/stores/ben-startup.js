export const BEN_INITIAL_CODE = `
await loadScript('/extensions/hydra-arithmetics.js')
await loadScript('/extensions/hydra-midi.js')
await midi.start({ input: '*', channel: '*' })

shape(3,.5).diff(shape(3,.49))
.scale(() => 0.8 + a.fft[0] * .1)
.scale(1,.6,1)
.mult(cc(15))
.out()
`;
