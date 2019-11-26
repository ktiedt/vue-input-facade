import maskit from './maskit'

export default function dynamicMask(value, { masks, masked, tokens } = {}) {
  masks = masks.slice().sort((a, b) => a.length - b.length)

  for (let i = 0; i < masks.length; i++) {
    const currentMask = masks[i]
    const nextMask = masks[i + 1]

    if (!(nextMask && maskit(value, { mask: nextMask, masked, tokens, short: true }).length > currentMask.length)) {
      return maskit(value, { mask: currentMask, masked, tokens })
    }
  }

  return '' // empty masks
}
