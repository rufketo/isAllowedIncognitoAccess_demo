# Findings

Firefox version: 83.0 (64-Bit), fedora 1.0

**Summary:**

- If `"incognito": "not_allowed"` is **not** in manifest.json:
  - If `extensions.allowPrivateBrowsingByDefault: true` in `about:config`:
    - `browser.extension.isAllowedIncognitoAccess()` returns `true`
    - This cannot be changed by the user (**bug 1**)
  - Else: `browser.extension.isAllowedIncognitoAccess()` returns the value configured by the user.
- Else:
  - If `extensions.allowPrivateBrowsingByDefault: true` in `about:config` (which is the default for Tor Browser): The extension cannot be installed. (**bug 2**)
  - Else: `browser.extension.isAllowedIncognitoAccess()` always returns `false`.

---

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

"Run in Private Windows" is hidden in GUI – **Bug 1**

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): true

## `"incognito": "not_allowed"` in manifest.json: Yes

### extensions.allowPrivateBrowsingByDefault: false

"Run in Private Windows" is hidden in GUI. Message "not allowed in private windows" displayed instead.

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): false

### extensions.allowPrivateBrowsingByDefault: true

installation prevented; message appears – **Bug 2**:

- title: mozapps
- content contains something like "add-on seems corrupted"

Installing with `extensions.allowPrivateBrowsingByDefault: false` and setting `extensions.allowPrivateBrowsingByDefault: true` afterwards works, though. However, after restart the add-on is silently removed.

    extension.inIncognitoContext: false
    extension.isAllowedIncognitoAccess(): false

Loading the add-on temporarily via `about:debugging` gives: `manifest.incognito set to "not_allowed" is currently unvailable for use.`
