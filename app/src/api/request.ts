import ky from 'ky'

export const request = ky.extend({
  prefix: `/api`,
})
