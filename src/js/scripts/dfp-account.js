/*!
 * jQuery DFP FashionUnited
 *
 *
 * Date: 2015-12-24
 */

 /* global jQuery: false */

document.addEventListener('mdl-componentupgraded', function(event) {
  if (event.target.MaterialLayout) {
    jQuery.dfp({
      dfpID: '53457124',
      enableSingleRequest: true,
      collapseEmptyDivs: 'original',
      sizeMapping: {
        'joost-default': [
            {browser: [1024, 768], ad_sizes: [[970, 90], [970, 250],
              [300, 250], [300, 600]]
            },
            {browser: [744, 600], ad_sizes: [728, 90]},
            {browser: [320, 500], ad_sizes: [[320, 100], [320, 50]]},
            {browser: [0, 0], ad_sizes: [150, 50]}
        ],
        'joost-top': [
            {browser: [1024, 768], ad_sizes: [[970, 90], [970, 250]]},
            {browser: [744, 600], ad_sizes: [728, 90]},
            {browser: [320, 500], ad_sizes: [[320, 100], [320, 50]]},
            {browser: [0, 0]}
        ],
        'joost-aside': [
            {browser: [1585, 768], ad_sizes: [[300, 250], [300, 600]]},
            {browser: [0, 0]}
        ],
        'joost-wallpaper': [
            {browser: [1860, 1080], ad_sizes: [[300, 1050], [260, 1200]]},
            {browser: [1690, 1080], ad_sizes: [260, 1200]},
            {browser: [0, 0]}
        ]
      },
      setCentering: true

    });
  }
});
