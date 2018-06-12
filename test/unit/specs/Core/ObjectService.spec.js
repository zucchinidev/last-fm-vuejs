import { ObjectService } from '@/Core/ObjectService'

describe('Core', () => {
  describe('ObjectService', () => {
    it('deepCopy: normal structure', () => {
      const original = {
        a: 1,
        b: 'string',
        c: true,
        d: null,
        e: undefined
      }
      const copy = ObjectService.deepCopy(original)
      expect(copy).toEqual(original)
    })

    it('deepCopy: nested structure', () => {
      const original = {
        a: {
          b: 1,
          c: [2, 3, {
            d: 4
          }]
        }
      }
      const copy = ObjectService.deepCopy(original)

      expect(copy).toEqual(original)
    })

    it('isObject', () => {
      class Fake {}
      expect(ObjectService.isObject({})).toEqual(true)
      expect(ObjectService.isObject(new Fake())).toEqual(true)
      expect(ObjectService.isObject(new Date())).toEqual(true)
      expect(ObjectService.isObject([])).toEqual(false)
      expect(ObjectService.isObject('')).toEqual(false)
    })
  })
})
