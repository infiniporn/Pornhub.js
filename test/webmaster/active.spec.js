'use strict'
const expect = require('chai').expect
const PornHub = require('../../src/pornhub')
const webMaster = new PornHub().webMaster

describe('WebMaster isVideoActive', () => {
    const url = 'https://www.pornhub.com/view_video.php?viewkey=ph625ad0e4c915f'

    it('# run()', async () => {
        const result = await webMaster.isVideoActive(url)

        expect(result).to.equal(true)
    })
})
