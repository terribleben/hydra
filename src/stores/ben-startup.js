export const BEN_INITIAL_CODE = `
await loadScript("https://hyper-hydra.glitch.me/hydra-arithmetics.js")
await loadScript('https://cdn.jsdelivr.net/npm/hydra-midi@latest/dist/index.js')
await midi.start({ input: '*', channel: '*' })

shape(3,.5).diff(shape(3,.49))
.scale(() => 0.8 + a.fft[0] * .1)
.scale(1,.6,1)
.out()
`;
