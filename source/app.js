(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS

  if (!options.engine_key) return

  window.Swiftype = window.Swiftype || {}
  window.Swiftype.key = options.engine_key

  var vendorScript = document.createElement('script')
  vendorScript.src = 'https://s.swiftypecdn.com/embed.js'
  document.head.appendChild(vendorScript)
}())
