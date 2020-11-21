# Findings

set xpinstall.signatures.required to false

## `"incognito": "not_allowed"` in manifest.json: No

### extensions.allowPrivateBrowsingByDefault: false

#### "Run in Private Windows": "Don't Allow"

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): false

#### "Run in Private Windows": "Allow"

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): true

### extensions.allowPrivateBrowsingByDefault: true

"Run in Private Windows" is hidden in GUI

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): true

## `"incognito": "not_allowed"` in manifest.json: Yes

### extensions.allowPrivateBrowsingByDefault: false

"Run in Private Windows" is hidden in GUI. Message "not allowed in private windows" displayed instead.

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): false

### extensions.allowPrivateBrowsingByDefault: true

installation prevented; message appears:

- title: mozapps
- content contains something like "add-on seems corrupted"

Installing with `extensions.allowPrivateBrowsingByDefault: false` and setting `extensions.allowPrivateBrowsingByDefault: true` afterwards works, though. However, after restart the add-on is silently removed.

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): false

Loading the add-on temporarily via `about:debugging` gives: `manifest.incognito set to "not_allowed" is currently unvailable for use.`