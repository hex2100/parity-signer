// Copyright 2015-2019 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

const meta =
	'bWV0YQhgGFN5c3RlbQABHChmaWxsX2Jsb2NrAAQhASBBIGJpZyBkaXNwYXRjaCB0aGF0IHdpbGwgZGlzYWxsb3cgYW55IG90aGVyIHRyYW5zYWN0aW9uIHRvIGJlIGluY2x1ZGVkLhhyZW1hcmsEHF9yZW1hcmsUQnl0ZXMEbCBNYWtlIHNvbWUgb24tY2hhaW4gcmVtYXJrLjhzZXRfaGVhcF9wYWdlcwQUcGFnZXMMdTY0BPwgU2V0IHRoZSBudW1iZXIgb2YgcGFnZXMgaW4gdGhlIFdlYkFzc2VtYmx5IGVudmlyb25tZW50J3MgaGVhcC4gc2V0X2NvZGUEDG5ldxRCeXRlcwRIIFNldCB0aGUgbmV3IGNvZGUuLHNldF9zdG9yYWdlBBRpdGVtczRWZWM8S2V5VmFsdWU+BGwgU2V0IHNvbWUgaXRlbXMgb2Ygc3RvcmFnZS4wa2lsbF9zdG9yYWdlBBBrZXlzIFZlYzxLZXk+BHggS2lsbCBzb21lIGl0ZW1zIGZyb20gc3RvcmFnZS4sa2lsbF9wcmVmaXgEGHByZWZpeAxLZXkEFQEgS2lsbCBhbGwgc3RvcmFnZSBpdGVtcyB3aXRoIGEga2V5IHRoYXQgc3RhcnRzIHdpdGggdGhlIGdpdmVuIHByZWZpeC4AAAAcVXRpbGl0eQABBBRiYXRjaAQUY2FsbHMkVmVjPENhbGw+BLAgU2VuZCBhIGJhdGNoIG9mIGRpc3BhdGNoIGNhbGxzIChvbmx5IHJvb3QpLgAAABBCYWJlAAEAAAAAJFRpbWVzdGFtcAABBAxzZXQEDG5vdzxDb21wYWN0PE1vbWVudD4kWCBTZXQgdGhlIGN1cnJlbnQgdGltZS4AWQEgVGhpcyBjYWxsIHNob3VsZCBiZSBpbnZva2VkIGV4YWN0bHkgb25jZSBwZXIgYmxvY2suIEl0IHdpbGwgcGFuaWMgYXQgdGhlIGZpbmFsaXphdGlvbtggcGhhc2UsIGlmIHRoaXMgY2FsbCBoYXNuJ3QgYmVlbiBpbnZva2VkIGJ5IHRoYXQgdGltZS4ARQEgVGhlIHRpbWVzdGFtcCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIHRoZSBwcmV2aW91cyBvbmUgYnkgdGhlIGFtb3VudCBzcGVjaWZpZWQgYnlEIGBNaW5pbXVtUGVyaW9kYC4A2CBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBgSW5oZXJlbnRgLgAAAChBdXRob3JzaGlwAAEEKHNldF91bmNsZXMEKG5ld191bmNsZXMsVmVjPEhlYWRlcj4EZCBQcm92aWRlIGEgc2V0IG9mIHVuY2xlcy4AAAAcSW5kaWNlcwABAAAAACBCYWxhbmNlcwABDCB0cmFuc2ZlcggQZGVzdBxBZGRyZXNzFHZhbHVlQENvbXBhY3Q8QmFsYW5jZT5c2CBUcmFuc2ZlciBzb21lIGxpcXVpZCBmcmVlIGJhbGFuY2UgdG8gYW5vdGhlciBhY2NvdW50LgAJASBgdHJhbnNmZXJgIHdpbGwgc2V0IHRoZSBgRnJlZUJhbGFuY2VgIG9mIHRoZSBzZW5kZXIgYW5kIHJlY2VpdmVyLiEBIEl0IHdpbGwgZGVjcmVhc2UgdGhlIHRvdGFsIGlzc3VhbmNlIG9mIHRoZSBzeXN0ZW0gYnkgdGhlIGBUcmFuc2ZlckZlZWAuFQEgSWYgdGhlIHNlbmRlcidzIGFjY291bnQgaXMgYmVsb3cgdGhlIGV4aXN0ZW50aWFsIGRlcG9zaXQgYXMgYSByZXN1bHS0IG9mIHRoZSB0cmFuc2ZlciwgdGhlIGFjY291bnQgd2lsbCBiZSByZWFwZWQuABkBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIGBTaWduZWRgIGJ5IHRoZSB0cmFuc2FjdG9yLgAsICMgPHdlaWdodD4xASAtIERlcGVuZGVudCBvbiBhcmd1bWVudHMgYnV0IG5vdCBjcml0aWNhbCwgZ2l2ZW4gcHJvcGVyIGltcGxlbWVudGF0aW9ucyBmb3LMICAgaW5wdXQgY29uZmlnIHR5cGVzLiBTZWUgcmVsYXRlZCBmdW5jdGlvbnMgYmVsb3cuaQEgLSBJdCBjb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzIGFuZCB3cml0ZXMgaW50ZXJuYWxseSBhbmQgbm8gY29tcGxleCBjb21wdXRhdGlvbi4ATCBSZWxhdGVkIGZ1bmN0aW9uczoAUQEgICAtIGBlbnN1cmVfY2FuX3dpdGhkcmF3YCBpcyBhbHdheXMgY2FsbGVkIGludGVybmFsbHkgYnV0IGhhcyBhIGJvdW5kZWQgY29tcGxleGl0eS4tASAgIC0gVHJhbnNmZXJyaW5nIGJhbGFuY2VzIHRvIGFjY291bnRzIHRoYXQgZGlkIG5vdCBleGlzdCBiZWZvcmUgd2lsbCBjYXVzZdQgICAgICBgVDo6T25OZXdBY2NvdW50Ojpvbl9uZXdfYWNjb3VudGAgdG8gYmUgY2FsbGVkLtwgICAtIFJlbW92aW5nIGVub3VnaCBmdW5kcyBmcm9tIGFuIGFjY291bnQgd2lsbCB0cmlnZ2VyWQEgICAgIGBUOjpEdXN0UmVtb3ZhbDo6b25fdW5iYWxhbmNlZGAgYW5kIGBUOjpPbkZyZWVCYWxhbmNlWmVybzo6b25fZnJlZV9iYWxhbmNlX3plcm9gLgAwICMgPC93ZWlnaHQ+LHNldF9iYWxhbmNlDAx3aG8cQWRkcmVzcyBuZXdfZnJlZUBDb21wYWN0PEJhbGFuY2U+MG5ld19yZXNlcnZlZEBDb21wYWN0PEJhbGFuY2U+NJQgU2V0IHRoZSBiYWxhbmNlcyBvZiBhIGdpdmVuIGFjY291bnQuACEBIFRoaXMgd2lsbCBhbHRlciBgRnJlZUJhbGFuY2VgIGFuZCBgUmVzZXJ2ZWRCYWxhbmNlYCBpbiBzdG9yYWdlLiBpdCB3aWxsCQEgYWxzbyBkZWNyZWFzZSB0aGUgdG90YWwgaXNzdWFuY2Ugb2YgdGhlIHN5c3RlbSAoYFRvdGFsSXNzdWFuY2VgKS4ZASBJZiB0aGUgbmV3IGZyZWUgb3IgcmVzZXJ2ZWQgYmFsYW5jZSBpcyBiZWxvdyB0aGUgZXhpc3RlbnRpYWwgZGVwb3NpdCzoIGl0IHdpbGwgcmVzZXQgdGhlIGFjY291bnQgbm9uY2UgKGBzeXN0ZW06OkFjY291bnROb25jZWApLgC0IFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBpcyBgcm9vdGAuACwgIyA8d2VpZ2h0PoAgLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLsQgLSBDb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzIGFuZCB3cml0ZXMuMCAjIDwvd2VpZ2h0Pjhmb3JjZV90cmFuc2ZlcgwYc291cmNlHEFkZHJlc3MQZGVzdBxBZGRyZXNzFHZhbHVlQENvbXBhY3Q8QmFsYW5jZT4IUQEgRXhhY3RseSBhcyBgdHJhbnNmZXJgLCBleGNlcHQgdGhlIG9yaWdpbiBtdXN0IGJlIHJvb3QgYW5kIHRoZSBzb3VyY2UgYWNjb3VudCBtYXkgYmUsIHNwZWNpZmllZC4AAABIVHJhbnNhY3Rpb25QYXltZW50AAAAAAAcU3Rha2luZwABOBBib25kDChjb250cm9sbGVyHEFkZHJlc3MUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+FHBheWVlRFJld2FyZERlc3RpbmF0aW9uPGUBIFRha2UgdGhlIG9yaWdpbiBhY2NvdW50IGFzIGEgc3Rhc2ggYW5kIGxvY2sgdXAgYHZhbHVlYCBvZiBpdHMgYmFsYW5jZS4gYGNvbnRyb2xsZXJgIHdpbGyEIGJlIHRoZSBhY2NvdW50IHRoYXQgY29udHJvbHMgaXQuADEBIGB2YWx1ZWAgbXVzdCBiZSBtb3JlIHRoYW4gdGhlIGBtaW5pbXVtX2JhbGFuY2VgIHNwZWNpZmllZCBieSBgVDo6Q3VycmVuY3lgLgAlASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgc3Rhc2ggYWNjb3VudC4ALCAjIDx3ZWlnaHQ+1CAtIEluZGVwZW5kZW50IG9mIHRoZSBhcmd1bWVudHMuIE1vZGVyYXRlIGNvbXBsZXhpdHkuICAtIE8oMSkuaCAtIFRocmVlIGV4dHJhIERCIGVudHJpZXMuAG0BIE5PVEU6IFR3byBvZiB0aGUgc3RvcmFnZSB3cml0ZXMgKGBTZWxmOjpib25kZWRgLCBgU2VsZjo6cGF5ZWVgKSBhcmUgX25ldmVyXyBjbGVhbmVkIHVubGVzcyUBIHRoZSBgb3JpZ2luYCBmYWxscyBiZWxvdyBfZXhpc3RlbnRpYWwgZGVwb3NpdF8gYW5kIGdldHMgcmVtb3ZlZCBhcyBkdXN0LjAgIyA8L3dlaWdodD4oYm9uZF9leHRyYQQ4bWF4X2FkZGl0aW9uYWxIQ29tcGFjdDxCYWxhbmNlT2Y+OGUBIEFkZCBzb21lIGV4dHJhIGFtb3VudCB0aGF0IGhhdmUgYXBwZWFyZWQgaW4gdGhlIHN0YXNoIGBmcmVlX2JhbGFuY2VgIGludG8gdGhlIGJhbGFuY2UgdXA0IGZvciBzdGFraW5nLgBRASBVc2UgdGhpcyBpZiB0aGVyZSBhcmUgYWRkaXRpb25hbCBmdW5kcyBpbiB5b3VyIHN0YXNoIGFjY291bnQgdGhhdCB5b3Ugd2lzaCB0byBib25kLmUBIFVubGlrZSBbYGJvbmRgXSBvciBbYHVuYm9uZGBdIHRoaXMgZnVuY3Rpb24gZG9lcyBub3QgaW1wb3NlIGFueSBsaW1pdGF0aW9uIG9uIHRoZSBhbW91bnRMIHRoYXQgY2FuIGJlIGFkZGVkLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgc3Rhc2gsIG5vdCB0aGUgY29udHJvbGxlci4ALCAjIDx3ZWlnaHQ+6CAtIEluZGVwZW5kZW50IG9mIHRoZSBhcmd1bWVudHMuIEluc2lnbmlmaWNhbnQgY29tcGxleGl0eS4gIC0gTygxKS5AIC0gT25lIERCIGVudHJ5LjAgIyA8L3dlaWdodD4YdW5ib25kBBR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj5cVQEgU2NoZWR1bGUgYSBwb3J0aW9uIG9mIHRoZSBzdGFzaCB0byBiZSB1bmxvY2tlZCByZWFkeSBmb3IgdHJhbnNmZXIgb3V0IGFmdGVyIHRoZSBib25kAQEgcGVyaW9kIGVuZHMuIElmIHRoaXMgbGVhdmVzIGFuIGFtb3VudCBhY3RpdmVseSBib25kZWQgbGVzcyB0aGFuJQEgVDo6Q3VycmVuY3k6Om1pbmltdW1fYmFsYW5jZSgpLCB0aGVuIGl0IGlzIGluY3JlYXNlZCB0byB0aGUgZnVsbCBhbW91bnQuAEkBIE9uY2UgdGhlIHVubG9jayBwZXJpb2QgaXMgZG9uZSwgeW91IGNhbiBjYWxsIGB3aXRoZHJhd191bmJvbmRlZGAgdG8gYWN0dWFsbHkgbW92ZcAgdGhlIGZ1bmRzIG91dCBvZiBtYW5hZ2VtZW50IHJlYWR5IGZvciB0cmFuc2Zlci4APQEgTm8gbW9yZSB0aGFuIGEgbGltaXRlZCBudW1iZXIgb2YgdW5sb2NraW5nIGNodW5rcyAoc2VlIGBNQVhfVU5MT0NLSU5HX0NIVU5LU2ApPQEgY2FuIGNvLWV4aXN0cyBhdCB0aGUgc2FtZSB0aW1lLiBJbiB0aGF0IGNhc2UsIFtgQ2FsbDo6d2l0aGRyYXdfdW5ib25kZWRgXSBuZWVk/CB0byBiZSBjYWxsZWQgZmlyc3QgdG8gcmVtb3ZlIHNvbWUgb2YgdGhlIGNodW5rcyAoaWYgcG9zc2libGUpLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgY29udHJvbGxlciwgbm90IHRoZSBzdGFzaC4AmCBTZWUgYWxzbyBbYENhbGw6OndpdGhkcmF3X3VuYm9uZGVkYF0uACwgIyA8d2VpZ2h0PkEBIC0gSW5kZXBlbmRlbnQgb2YgdGhlIGFyZ3VtZW50cy4gTGltaXRlZCBidXQgcG90ZW50aWFsbHkgZXhwbG9pdGFibGUgY29tcGxleGl0eS6YIC0gQ29udGFpbnMgYSBsaW1pdGVkIG51bWJlciBvZiByZWFkcy5lASAtIEVhY2ggY2FsbCAocmVxdWlyZXMgdGhlIHJlbWFpbmRlciBvZiB0aGUgYm9uZGVkIGJhbGFuY2UgdG8gYmUgYWJvdmUgYG1pbmltdW1fYmFsYW5jZWApcQEgICB3aWxsIGNhdXNlIGEgbmV3IGVudHJ5IHRvIGJlIGluc2VydGVkIGludG8gYSB2ZWN0b3IgKGBMZWRnZXIudW5sb2NraW5nYCkga2VwdCBpbiBzdG9yYWdlLqUBICAgVGhlIG9ubHkgd2F5IHRvIGNsZWFuIHRoZSBhZm9yZW1lbnRpb25lZCBzdG9yYWdlIGl0ZW0gaXMgYWxzbyB1c2VyLWNvbnRyb2xsZWQgdmlhIGB3aXRoZHJhd191bmJvbmRlZGAuQCAtIE9uZSBEQiBlbnRyeS4oIDwvd2VpZ2h0PkR3aXRoZHJhd191bmJvbmRlZABALQEgUmVtb3ZlIGFueSB1bmxvY2tlZCBjaHVua3MgZnJvbSB0aGUgYHVubG9ja2luZ2AgcXVldWUgZnJvbSBvdXIgbWFuYWdlbWVudC4ANQEgVGhpcyBlc3NlbnRpYWxseSBmcmVlcyB1cCB0aGF0IGJhbGFuY2UgdG8gYmUgdXNlZCBieSB0aGUgc3Rhc2ggYWNjb3VudCB0byBkb0wgd2hhdGV2ZXIgaXQgd2FudHMuAFUBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfIGJ5IHRoZSBjb250cm9sbGVyLCBub3QgdGhlIHN0YXNoLgBsIFNlZSBhbHNvIFtgQ2FsbDo6dW5ib25kYF0uACwgIyA8d2VpZ2h0PlUBIC0gQ291bGQgYmUgZGVwZW5kZW50IG9uIHRoZSBgb3JpZ2luYCBhcmd1bWVudCBhbmQgaG93IG11Y2ggYHVubG9ja2luZ2AgY2h1bmtzIGV4aXN0LkUBICBJdCBpbXBsaWVzIGBjb25zb2xpZGF0ZV91bmxvY2tlZGAgd2hpY2ggbG9vcHMgb3ZlciBgTGVkZ2VyLnVubG9ja2luZ2AsIHdoaWNoIGlz9CAgaW5kaXJlY3RseSB1c2VyLWNvbnRyb2xsZWQuIFNlZSBbYHVuYm9uZGBdIGZvciBtb3JlIGRldGFpbC55ASAtIENvbnRhaW5zIGEgbGltaXRlZCBudW1iZXIgb2YgcmVhZHMsIHlldCB0aGUgc2l6ZSBvZiB3aGljaCBjb3VsZCBiZSBsYXJnZSBiYXNlZCBvbiBgbGVkZ2VyYC7IIC0gV3JpdGVzIGFyZSBsaW1pdGVkIHRvIHRoZSBgb3JpZ2luYCBhY2NvdW50IGtleS4wICMgPC93ZWlnaHQ+IHZhbGlkYXRlBBRwcmVmczhWYWxpZGF0b3JQcmVmcyzoIERlY2xhcmUgdGhlIGRlc2lyZSB0byB2YWxpZGF0ZSBmb3IgdGhlIG9yaWdpbiBjb250cm9sbGVyLgDcIEVmZmVjdHMgd2lsbCBiZSBmZWx0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5leHQgZXJhLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgY29udHJvbGxlciwgbm90IHRoZSBzdGFzaC4ALCAjIDx3ZWlnaHQ+6CAtIEluZGVwZW5kZW50IG9mIHRoZSBhcmd1bWVudHMuIEluc2lnbmlmaWNhbnQgY29tcGxleGl0eS6YIC0gQ29udGFpbnMgYSBsaW1pdGVkIG51bWJlciBvZiByZWFkcy7IIC0gV3JpdGVzIGFyZSBsaW1pdGVkIHRvIHRoZSBgb3JpZ2luYCBhY2NvdW50IGtleS4wICMgPC93ZWlnaHQ+IG5vbWluYXRlBBx0YXJnZXRzMFZlYzxBZGRyZXNzPiwRASBEZWNsYXJlIHRoZSBkZXNpcmUgdG8gbm9taW5hdGUgYHRhcmdldHNgIGZvciB0aGUgb3JpZ2luIGNvbnRyb2xsZXIuANwgRWZmZWN0cyB3aWxsIGJlIGZlbHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBlcmEuAFUBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfIGJ5IHRoZSBjb250cm9sbGVyLCBub3QgdGhlIHN0YXNoLgAsICMgPHdlaWdodD4lASAtIFRoZSB0cmFuc2FjdGlvbidzIGNvbXBsZXhpdHkgaXMgcHJvcG9ydGlvbmFsIHRvIHRoZSBzaXplIG9mIGB0YXJnZXRzYCyYIHdoaWNoIGlzIGNhcHBlZCBhdCBgTUFYX05PTUlOQVRJT05TYC7YIC0gQm90aCB0aGUgcmVhZHMgYW5kIHdyaXRlcyBmb2xsb3cgYSBzaW1pbGFyIHBhdHRlcm4uMCAjIDwvd2VpZ2h0PhRjaGlsbAAsyCBEZWNsYXJlIG5vIGRlc2lyZSB0byBlaXRoZXIgdmFsaWRhdGUgb3Igbm9taW5hdGUuANwgRWZmZWN0cyB3aWxsIGJlIGZlbHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBlcmEuAFUBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfIGJ5IHRoZSBjb250cm9sbGVyLCBub3QgdGhlIHN0YXNoLgAsICMgPHdlaWdodD7oIC0gSW5kZXBlbmRlbnQgb2YgdGhlIGFyZ3VtZW50cy4gSW5zaWduaWZpY2FudCBjb21wbGV4aXR5LlQgLSBDb250YWlucyBvbmUgcmVhZC7IIC0gV3JpdGVzIGFyZSBsaW1pdGVkIHRvIHRoZSBgb3JpZ2luYCBhY2NvdW50IGtleS4wICMgPC93ZWlnaHQ+JHNldF9wYXllZQQUcGF5ZWVEUmV3YXJkRGVzdGluYXRpb24suCAoUmUtKXNldCB0aGUgcGF5bWVudCB0YXJnZXQgZm9yIGEgY29udHJvbGxlci4A3CBFZmZlY3RzIHdpbGwgYmUgZmVsdCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGVyYS4AVQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIGNvbnRyb2xsZXIsIG5vdCB0aGUgc3Rhc2guACwgIyA8d2VpZ2h0PuggLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLiBJbnNpZ25pZmljYW50IGNvbXBsZXhpdHkumCAtIENvbnRhaW5zIGEgbGltaXRlZCBudW1iZXIgb2YgcmVhZHMuyCAtIFdyaXRlcyBhcmUgbGltaXRlZCB0byB0aGUgYG9yaWdpbmAgYWNjb3VudCBrZXkuMCAjIDwvd2VpZ2h0PjhzZXRfY29udHJvbGxlcgQoY29udHJvbGxlchxBZGRyZXNzLJAgKFJlLSlzZXQgdGhlIGNvbnRyb2xsZXIgb2YgYSBzdGFzaC4A3CBFZmZlY3RzIHdpbGwgYmUgZmVsdCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGVyYS4AVQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIHN0YXNoLCBub3QgdGhlIGNvbnRyb2xsZXIuACwgIyA8d2VpZ2h0PuggLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLiBJbnNpZ25pZmljYW50IGNvbXBsZXhpdHkumCAtIENvbnRhaW5zIGEgbGltaXRlZCBudW1iZXIgb2YgcmVhZHMuyCAtIFdyaXRlcyBhcmUgbGltaXRlZCB0byB0aGUgYG9yaWdpbmAgYWNjb3VudCBrZXkuMCAjIDwvd2VpZ2h0PkxzZXRfdmFsaWRhdG9yX2NvdW50BAxuZXcwQ29tcGFjdDx1MzI+BIAgVGhlIGlkZWFsIG51bWJlciBvZiB2YWxpZGF0b3JzLjRmb3JjZV9ub19lcmFzABSwIEZvcmNlIHRoZXJlIHRvIGJlIG5vIG5ldyBlcmFzIGluZGVmaW5pdGVseS4ALCAjIDx3ZWlnaHQ+QCAtIE5vIGFyZ3VtZW50cy4wICMgPC93ZWlnaHQ+NGZvcmNlX25ld19lcmEAGE0BIEZvcmNlIHRoZXJlIHRvIGJlIGEgbmV3IGVyYSBhdCB0aGUgZW5kIG9mIHRoZSBuZXh0IHNlc3Npb24uIEFmdGVyIHRoaXMsIGl0IHdpbGwgYmWgIHJlc2V0IHRvIG5vcm1hbCAobm9uLWZvcmNlZCkgYmVoYXZpb3VyLgAsICMgPHdlaWdodD5AIC0gTm8gYXJndW1lbnRzLjAgIyA8L3dlaWdodD5Ec2V0X2ludnVsbmVyYWJsZXMEKHZhbGlkYXRvcnM4VmVjPEFjY291bnRJZD4EzCBTZXQgdGhlIHZhbGlkYXRvcnMgd2hvIGNhbm5vdCBiZSBzbGFzaGVkIChpZiBhbnkpLjRmb3JjZV91bnN0YWtlBBRzdGFzaCRBY2NvdW50SWQEDQEgRm9yY2UgYSBjdXJyZW50IHN0YWtlciB0byBiZWNvbWUgY29tcGxldGVseSB1bnN0YWtlZCwgaW1tZWRpYXRlbHkuAAAAHFNlc3Npb24AAQQgc2V0X2tleXMIEGtleXMQS2V5cxRwcm9vZhRCeXRlcyjkIFNldHMgdGhlIHNlc3Npb24ga2V5KHMpIG9mIHRoZSBmdW5jdGlvbiBjYWxsZXIgdG8gYGtleWAuIQEgQWxsb3dzIGFuIGFjY291bnQgdG8gc2V0IGl0cyBzZXNzaW9uIGtleSBwcmlvciB0byBiZWNvbWluZyBhIHZhbGlkYXRvci7EIFRoaXMgZG9lc24ndCB0YWtlIGVmZmVjdCB1bnRpbCB0aGUgbmV4dCBzZXNzaW9uLgDUIFRoZSBkaXNwYXRjaCBvcmlnaW4gb2YgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHNpZ25lZC4ALCAjIDx3ZWlnaHQ+iCAtIE8obG9nIG4pIGluIG51bWJlciBvZiBhY2NvdW50cy5YIC0gT25lIGV4dHJhIERCIGVudHJ5LjAgIyA8L3dlaWdodD4AAAAkRGVtb2NyYWN5AAFEHHByb3Bvc2UIIHByb3Bvc2FsIFByb3Bvc2FsFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPhigIFByb3Bvc2UgYSBzZW5zaXRpdmUgYWN0aW9uIHRvIGJlIHRha2VuLgAsICMgPHdlaWdodD4gIC0gTygxKS6AIC0gVHdvIERCIGNoYW5nZXMsIG9uZSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+GHNlY29uZAQgcHJvcG9zYWxIQ29tcGFjdDxQcm9wSW5kZXg+GKAgUHJvcG9zZSBhIHNlbnNpdGl2ZSBhY3Rpb24gdG8gYmUgdGFrZW4uACwgIyA8d2VpZ2h0PiAgLSBPKDEpLkAgLSBPbmUgREIgZW50cnkuMCAjIDwvd2VpZ2h0PhB2b3RlCCRyZWZfaW5kZXhgQ29tcGFjdDxSZWZlcmVuZHVtSW5kZXg+EHZvdGUQVm90ZRw1ASBWb3RlIGluIGEgcmVmZXJlbmR1bS4gSWYgYHZvdGUuaXNfYXllKClgLCB0aGUgdm90ZSBpcyB0byBlbmFjdCB0aGUgcHJvcG9zYWw7vCBvdGhlcndpc2UgaXQgaXMgYSB2b3RlIHRvIGtlZXAgdGhlIHN0YXR1cyBxdW8uACwgIyA8d2VpZ2h0PiAgLSBPKDEpLnwgLSBPbmUgREIgY2hhbmdlLCBvbmUgREIgZW50cnkuMCAjIDwvd2VpZ2h0Pihwcm94eV92b3RlCCRyZWZfaW5kZXhgQ29tcGFjdDxSZWZlcmVuZHVtSW5kZXg+EHZvdGUQVm90ZRxRASBWb3RlIGluIGEgcmVmZXJlbmR1bSBvbiBiZWhhbGYgb2YgYSBzdGFzaC4gSWYgYHZvdGUuaXNfYXllKClgLCB0aGUgdm90ZSBpcyB0byBlbmFjdPggdGhlIHByb3Bvc2FsOyAgb3RoZXJ3aXNlIGl0IGlzIGEgdm90ZSB0byBrZWVwIHRoZSBzdGF0dXMgcXVvLgAsICMgPHdlaWdodD4gIC0gTygxKS58IC0gT25lIERCIGNoYW5nZSwgb25lIERCIGVudHJ5LjAgIyA8L3dlaWdodD5AZW1lcmdlbmN5X2NhbmNlbAQkcmVmX2luZGV4PFJlZmVyZW5kdW1JbmRleAhRASBTY2hlZHVsZSBhbiBlbWVyZ2VuY3kgY2FuY2VsbGF0aW9uIG9mIGEgcmVmZXJlbmR1bS4gQ2Fubm90IGhhcHBlbiB0d2ljZSB0byB0aGUgc2FtZTAgcmVmZXJlbmR1bS5AZXh0ZXJuYWxfcHJvcG9zZQQgcHJvcG9zYWwgUHJvcG9zYWwIMQEgU2NoZWR1bGUgYSByZWZlcmVuZHVtIHRvIGJlIHRhYmxlZCBvbmNlIGl0IGlzIGxlZ2FsIHRvIHNjaGVkdWxlIGFuIGV4dGVybmFsMCByZWZlcmVuZHVtLmRleHRlcm5hbF9wcm9wb3NlX21ham9yaXR5BCBwcm9wb3NhbCBQcm9wb3NhbBRZASBTY2hlZHVsZSBhIG1ham9yaXR5LWNhcnJpZXMgcmVmZXJlbmR1bSB0byBiZSB0YWJsZWQgbmV4dCBvbmNlIGl0IGlzIGxlZ2FsIHRvIHNjaGVkdWxlYCBhbiBleHRlcm5hbCByZWZlcmVuZHVtLgBNASBVbmxpa2UgYGV4dGVybmFsX3Byb3Bvc2VgLCBibGFja2xpc3RpbmcgaGFzIG5vIGVmZmVjdCBvbiB0aGlzIGFuZCBpdCBtYXkgcmVwbGFjZSBhnCBwcmUtc2NoZWR1bGVkIGBleHRlcm5hbF9wcm9wb3NlYCBjYWxsLmBleHRlcm5hbF9wcm9wb3NlX2RlZmF1bHQEIHByb3Bvc2FsIFByb3Bvc2FsFEkBIFNjaGVkdWxlIGEgbmVnYXRpdmUtdHVybm91dC1iaWFzIHJlZmVyZW5kdW0gdG8gYmUgdGFibGVkIG5leHQgb25jZSBpdCBpcyBsZWdhbCB0b4Qgc2NoZWR1bGUgYW4gZXh0ZXJuYWwgcmVmZXJlbmR1bS4ATQEgVW5saWtlIGBleHRlcm5hbF9wcm9wb3NlYCwgYmxhY2tsaXN0aW5nIGhhcyBubyBlZmZlY3Qgb24gdGhpcyBhbmQgaXQgbWF5IHJlcGxhY2UgYZwgcHJlLXNjaGVkdWxlZCBgZXh0ZXJuYWxfcHJvcG9zZWAgY2FsbC4oZmFzdF90cmFjaww0cHJvcG9zYWxfaGFzaBBIYXNoNHZvdGluZ19wZXJpb2QsQmxvY2tOdW1iZXIUZGVsYXksQmxvY2tOdW1iZXIkUQEgU2NoZWR1bGUgdGhlIGN1cnJlbnRseSBleHRlcm5hbGx5LXByb3Bvc2VkIG1ham9yaXR5LWNhcnJpZXMgcmVmZXJlbmR1bSB0byBiZSB0YWJsZWRlASBpbW1lZGlhdGVseS4gSWYgdGhlcmUgaXMgbm8gZXh0ZXJuYWxseS1wcm9wb3NlZCByZWZlcmVuZHVtIGN1cnJlbnRseSwgb3IgaWYgdGhlcmUgaXMgb25l7CBidXQgaXQgaXMgbm90IGEgbWFqb3JpdHktY2FycmllcyByZWZlcmVuZHVtIHRoZW4gaXQgZmFpbHMuAPggLSBgcHJvcG9zYWxfaGFzaGA6IFRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGV4dGVybmFsIHByb3Bvc2FsLmEBIC0gYHZvdGluZ19wZXJpb2RgOiBUaGUgcGVyaW9kIHRoYXQgaXMgYWxsb3dlZCBmb3Igdm90aW5nIG9uIHRoaXMgcHJvcG9zYWwuIEluY3JlYXNlZCB0b5ggICBgRW1lcmdlbmN5Vm90aW5nUGVyaW9kYCBpZiB0b28gbG93LlUBIC0gYGRlbGF5YDogVGhlIG51bWJlciBvZiBibG9jayBhZnRlciB2b3RpbmcgaGFzIGVuZGVkIGluIGFwcHJvdmFsIGFuZCB0aGlzIHNob3VsZCBiZbwgICBlbmFjdGVkLiBUaGlzIGRvZXNuJ3QgaGF2ZSBhIG1pbmltdW0gYW1vdW50LjR2ZXRvX2V4dGVybmFsBDRwcm9wb3NhbF9oYXNoEEhhc2gEvCBWZXRvIGFuZCBibGFja2xpc3QgdGhlIGV4dGVybmFsIHByb3Bvc2FsIGhhc2guRGNhbmNlbF9yZWZlcmVuZHVtBCRyZWZfaW5kZXhgQ29tcGFjdDxSZWZlcmVuZHVtSW5kZXg+BFQgUmVtb3ZlIGEgcmVmZXJlbmR1bS40Y2FuY2VsX3F1ZXVlZAwQd2hlblBDb21wYWN0PEJsb2NrTnVtYmVyPhR3aGljaDBDb21wYWN0PHUzMj4Qd2hhdGBDb21wYWN0PFJlZmVyZW5kdW1JbmRleD4EoCBDYW5jZWwgYSBwcm9wb3NhbCBxdWV1ZWQgZm9yIGVuYWN0bWVudC4kc2V0X3Byb3h5BBRwcm94eSRBY2NvdW50SWQUmCBTcGVjaWZ5IGEgcHJveHkuIENhbGxlZCBieSB0aGUgc3Rhc2guACwgIyA8d2VpZ2h0PlggLSBPbmUgZXh0cmEgREIgZW50cnkuMCAjIDwvd2VpZ2h0PjByZXNpZ25fcHJveHkAFJggQ2xlYXIgdGhlIHByb3h5LiBDYWxsZWQgYnkgdGhlIHByb3h5LgAsICMgPHdlaWdodD5AIC0gT25lIERCIGNsZWFyLjAgIyA8L3dlaWdodD4wcmVtb3ZlX3Byb3h5BBRwcm94eSRBY2NvdW50SWQUmCBDbGVhciB0aGUgcHJveHkuIENhbGxlZCBieSB0aGUgc3Rhc2guACwgIyA8d2VpZ2h0PkAgLSBPbmUgREIgY2xlYXIuMCAjIDwvd2VpZ2h0PiBkZWxlZ2F0ZQgIdG8kQWNjb3VudElkKGNvbnZpY3Rpb24oQ29udmljdGlvbhQ8IERlbGVnYXRlIHZvdGUuACwgIyA8d2VpZ2h0PlggLSBPbmUgZXh0cmEgREIgZW50cnkuMCAjIDwvd2VpZ2h0Pih1bmRlbGVnYXRlABREIFVuZGVsZWdhdGUgdm90ZS4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuMCAjIDwvd2VpZ2h0PgAAABxDb3VuY2lsAAEQLHNldF9tZW1iZXJzBCxuZXdfbWVtYmVyczhWZWM8QWNjb3VudElkPhBRASBTZXQgdGhlIGNvbGxlY3RpdmUncyBtZW1iZXJzaGlwIG1hbnVhbGx5IHRvIGBuZXdfbWVtYmVyc2AuIEJlIG5pY2UgdG8gdGhlIGNoYWluIGFuZFwgcHJvdmlkZSBpdCBwcmUtc29ydGVkLgBYIFJlcXVpcmVzIHJvb3Qgb3JpZ2luLhxleGVjdXRlBCBwcm9wb3NhbCBQcm9wb3NhbAz0IERpc3BhdGNoIGEgcHJvcG9zYWwgZnJvbSBhIG1lbWJlciB1c2luZyB0aGUgYE1lbWJlcmAgb3JpZ2luLgCsIE9yaWdpbiBtdXN0IGJlIGEgbWVtYmVyIG9mIHRoZSBjb2xsZWN0aXZlLhxwcm9wb3NlCCR0aHJlc2hvbGRQQ29tcGFjdDxNZW1iZXJDb3VudD4gcHJvcG9zYWwgUHJvcG9zYWwQLCAjIDx3ZWlnaHQ+kCAtIEJvdW5kZWQgc3RvcmFnZSByZWFkcyBhbmQgd3JpdGVzLrggLSBBcmd1bWVudCBgdGhyZXNob2xkYCBoYXMgYmVhcmluZyBvbiB3ZWlnaHQuMCAjIDwvd2VpZ2h0PhB2b3RlDCBwcm9wb3NhbBBIYXNoFGluZGV4WENvbXBhY3Q8UHJvcG9zYWxJbmRleD4cYXBwcm92ZRBib29sECwgIyA8d2VpZ2h0PowgLSBCb3VuZGVkIHN0b3JhZ2UgcmVhZCBhbmQgd3JpdGVzLlUBIC0gV2lsbCBiZSBzbGlnaHRseSBoZWF2aWVyIGlmIHRoZSBwcm9wb3NhbCBpcyBhcHByb3ZlZCAvIGRpc2FwcHJvdmVkIGFmdGVyIHRoZSB2b3RlLjAgIyA8L3dlaWdodD4AAABIVGVjaG5pY2FsQ29tbWl0dGVlAAEQLHNldF9tZW1iZXJzBCxuZXdfbWVtYmVyczhWZWM8QWNjb3VudElkPhBRASBTZXQgdGhlIGNvbGxlY3RpdmUncyBtZW1iZXJzaGlwIG1hbnVhbGx5IHRvIGBuZXdfbWVtYmVyc2AuIEJlIG5pY2UgdG8gdGhlIGNoYWluIGFuZFwgcHJvdmlkZSBpdCBwcmUtc29ydGVkLgBYIFJlcXVpcmVzIHJvb3Qgb3JpZ2luLhxleGVjdXRlBCBwcm9wb3NhbCBQcm9wb3NhbAz0IERpc3BhdGNoIGEgcHJvcG9zYWwgZnJvbSBhIG1lbWJlciB1c2luZyB0aGUgYE1lbWJlcmAgb3JpZ2luLgCsIE9yaWdpbiBtdXN0IGJlIGEgbWVtYmVyIG9mIHRoZSBjb2xsZWN0aXZlLhxwcm9wb3NlCCR0aHJlc2hvbGRQQ29tcGFjdDxNZW1iZXJDb3VudD4gcHJvcG9zYWwgUHJvcG9zYWwQLCAjIDx3ZWlnaHQ+kCAtIEJvdW5kZWQgc3RvcmFnZSByZWFkcyBhbmQgd3JpdGVzLrggLSBBcmd1bWVudCBgdGhyZXNob2xkYCBoYXMgYmVhcmluZyBvbiB3ZWlnaHQuMCAjIDwvd2VpZ2h0PhB2b3RlDCBwcm9wb3NhbBBIYXNoFGluZGV4WENvbXBhY3Q8UHJvcG9zYWxJbmRleD4cYXBwcm92ZRBib29sECwgIyA8d2VpZ2h0PowgLSBCb3VuZGVkIHN0b3JhZ2UgcmVhZCBhbmQgd3JpdGVzLlUBIC0gV2lsbCBiZSBzbGlnaHRseSBoZWF2aWVyIGlmIHRoZSBwcm9wb3NhbCBpcyBhcHByb3ZlZCAvIGRpc2FwcHJvdmVkIGFmdGVyIHRoZSB2b3RlLjAgIyA8L3dlaWdodD4AAAAkRWxlY3Rpb25zAAEcEHZvdGUIFHZvdGVzOFZlYzxBY2NvdW50SWQ+FHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPjwFASBWb3RlIGZvciBhIHNldCBvZiBjYW5kaWRhdGVzIGZvciB0aGUgdXBjb21pbmcgcm91bmQgb2YgZWxlY3Rpb24uAFAgVGhlIGB2b3Rlc2Agc2hvdWxkOkggICAtIG5vdCBiZSBlbXB0eS6sICAgLSBiZSBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBjYW5kaWRhdGVzLgBdASBVcG9uIHZvdGluZywgYHZhbHVlYCB1bml0cyBvZiBgd2hvYCdzIGJhbGFuY2UgaXMgbG9ja2VkIGFuZCBhIGJvbmQgYW1vdW50IGlzIHJlc2VydmVkLl0BIEl0IGlzIHRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgY2FsbGVyIHRvIG5vdCBwbGFjZSBhbGwgb2YgdGhlaXIgYmFsYW5jZSBpbnRvIHRoZSBsb2NroCBhbmQga2VlcCBzb21lIGZvciBmdXJ0aGVyIHRyYW5zYWN0aW9ucy4ALCAjIDx3ZWlnaHQ+LCAjIyMjIFN0YXRlMCBSZWFkczogTygxKcggV3JpdGVzOiBPKFYpIGdpdmVuIGBWYCB2b3Rlcy4gViBpcyBib3VuZGVkIGJ5IDE2LjAgIyA8L3dlaWdodD4wcmVtb3ZlX3ZvdGVyABwhASBSZW1vdmUgYG9yaWdpbmAgYXMgYSB2b3Rlci4gVGhpcyByZW1vdmVzIHRoZSBsb2NrIGFuZCByZXR1cm5zIHRoZSBib25kLgAsICMgPHdlaWdodD4sICMjIyMgU3RhdGUwIFJlYWRzOiBPKDEpNCBXcml0ZXM6IE8oMSkwICMgPC93ZWlnaHQ+UHJlcG9ydF9kZWZ1bmN0X3ZvdGVyBBh0YXJnZXQcQWRkcmVzczRdASBSZXBvcnQgYHRhcmdldGAgZm9yIGJlaW5nIGFuIGRlZnVuY3Qgdm90ZXIuIEluIGNhc2Ugb2YgYSB2YWxpZCByZXBvcnQsIHRoZSByZXBvcnRlciBpc10BIHJld2FyZGVkIGJ5IHRoZSBib25kIGFtb3VudCBvZiBgdGFyZ2V0YC4gT3RoZXJ3aXNlLCB0aGUgcmVwb3J0ZXIgaXRzZWxmIGlzIHJlbW92ZWQgYW5kXCB0aGVpciBib25kIGlzIHNsYXNoZWQuAIggQSBkZWZ1bmN0IHZvdGVyIGlzIGRlZmluZWQgdG8gYmU6TQEgICAtIGEgdm90ZXIgd2hvc2UgY3VycmVudCBzdWJtaXR0ZWQgdm90ZXMgYXJlIGFsbCBpbnZhbGlkLiBpLmUuIGFsbCBvZiB0aGVtIGFyZSBub7QgICAgIGxvbmdlciBhIGNhbmRpZGF0ZSBub3IgYW4gYWN0aXZlIG1lbWJlci4ALCAjIDx3ZWlnaHQ+LCAjIyMjIFN0YXRlFQEgUmVhZHM6IE8oTkxvZ00pIGdpdmVuIE0gY3VycmVudCBjYW5kaWRhdGVzIGFuZCBOIHZvdGVzIGZvciBgdGFyZ2V0YC40IFdyaXRlczogTygxKTAgIyA8L3dlaWdodD5Ac3VibWl0X2NhbmRpZGFjeQA0eCBTdWJtaXQgb25lc2VsZiBmb3IgY2FuZGlkYWN5LgBkIEEgY2FuZGlkYXRlIHdpbGwgZWl0aGVyOuwgICAtIExvc2UgYXQgdGhlIGVuZCBvZiB0aGUgdGVybSBhbmQgZm9yZmVpdCB0aGVpciBkZXBvc2l0Li0BICAgLSBXaW4gYW5kIGJlY29tZSBhIG1lbWJlci4gTWVtYmVycyB3aWxsIGV2ZW50dWFsbHkgZ2V0IHRoZWlyIHN0YXNoIGJhY2suVQEgICAtIEJlY29tZSBhIHJ1bm5lci11cC4gUnVubmVycy11cHMgYXJlIHJlc2VydmVkIG1lbWJlcnMgaW4gY2FzZSBvbmUgZ2V0cyBmb3JjZWZ1bGx5NCAgICAgcmVtb3ZlZC4ALCAjIDx3ZWlnaHQ+LCAjIyMjIFN0YXRljCBSZWFkczogTyhMb2dOKSBHaXZlbiBOIGNhbmRpZGF0ZXMuNCBXcml0ZXM6IE8oMSkwICMgPC93ZWlnaHQ+YHNldF9kZXNpcmVkX21lbWJlcl9jb3VudAQUY291bnQwQ29tcGFjdDx1MzI+HGEBIFNldCB0aGUgZGVzaXJlZCBtZW1iZXIgY291bnQuIENoYW5nZXMgd2lsbCBiZSBlZmZlY3RpdmUgYXQgdGhlIGJlZ2lubmluZyBvZiBuZXh0IHJvdW5kLgAsICMgPHdlaWdodD4sICMjIyMgU3RhdGUwIFJlYWRzOiBPKDEpNCBXcml0ZXM6IE8oMSkwICMgPC93ZWlnaHQ+NHJlbW92ZV9tZW1iZXIEDHdobxxBZGRyZXNzMCEBIFJlbW92ZSBhIHBhcnRpY3VsYXIgbWVtYmVyIGZyb20gdGhlIHNldC4gVGhpcyBpcyBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuAFkBIElmIGEgcnVubmVyLXVwIGlzIGF2YWlsYWJsZSwgdGhlbiB0aGUgYmVzdCBydW5uZXItdXAgd2lsbCBiZSByZW1vdmVkIGFuZCByZXBsYWNlcyB0aGX0IG91dGdvaW5nIG1lbWJlci4gT3RoZXJ3aXNlLCBhIG5ldyBwaHJhZ21lbiByb3VuZCBpcyBzdGFydGVkLgBFASBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgdGhlIGRlc2lnbmF0ZWQgYmxvY2sgbnVtYmVyIG9mIHRoZSBuZXh0IGVsZWN0aW9uLgAsICMgPHdlaWdodD4sICMjIyMgU3RhdGVYIFJlYWRzOiBPKGRvX3BocmFnbWVuKVwgV3JpdGVzOiBPKGRvX3BocmFnbWVuKTAgIyA8L3dlaWdodD5Ec2V0X3Rlcm1fZHVyYXRpb24EFGNvdW50UENvbXBhY3Q8QmxvY2tOdW1iZXI+HEkBIFNldCB0aGUgZHVyYXRpb24gb2YgZWFjaCB0ZXJtLiBUaGlzIHdpbGwgYWZmZWN0IHRoZSBuZXh0IGVsZWN0aW9uJ3MgYmxvY2sgbnVtYmVyLgAsICMgPHdlaWdodD4sICMjIyMgU3RhdGUwIFJlYWRzOiBPKDEpNCBXcml0ZXM6IE8oMSkwICMgPC93ZWlnaHQ+AAAATFRlY2huaWNhbE1lbWJlcnNoaXAAARAoYWRkX21lbWJlcgQMd2hvJEFjY291bnRJZAx8IEFkZCBhIG1lbWJlciBgd2hvYCB0byB0aGUgc2V0LgC0IE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBBZGRPcmlnaW5gIG9yIHJvb3QuNHJlbW92ZV9tZW1iZXIEDHdobyRBY2NvdW50SWQMkCBSZW1vdmUgYSBtZW1iZXIgYHdob2AgZnJvbSB0aGUgc2V0LgDAIE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBSZW1vdmVPcmlnaW5gIG9yIHJvb3QuLHN3YXBfbWVtYmVyCBhyZW1vdmUkQWNjb3VudElkDGFkZCRBY2NvdW50SWQMwCBTd2FwIG91dCBvbmUgbWVtYmVyIGByZW1vdmVgIGZvciBhbm90aGVyIGBhZGRgLgC4IE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBTd2FwT3JpZ2luYCBvciByb290LjRyZXNldF9tZW1iZXJzBBxtZW1iZXJzOFZlYzxBY2NvdW50SWQ+EFkBIENoYW5nZSB0aGUgbWVtYmVyc2hpcCB0byBhIG5ldyBzZXQsIGRpc3JlZ2FyZGluZyB0aGUgZXhpc3RpbmcgbWVtYmVyc2hpcC4gQmUgbmljZSBhbmRsIHBhc3MgYG1lbWJlcnNgIHByZS1zb3J0ZWQuALwgTWF5IG9ubHkgYmUgY2FsbGVkIGZyb20gYFJlc2V0T3JpZ2luYCBvciByb290LgAAADxGaW5hbGl0eVRyYWNrZXIAAQQoZmluYWxfaGludAQQaGludFBDb21wYWN0PEJsb2NrTnVtYmVyPgj0IEhpbnQgdGhhdCB0aGUgYXV0aG9yIG9mIHRoaXMgYmxvY2sgdGhpbmtzIHRoZSBiZXN0IGZpbmFsaXplZGwgYmxvY2sgaXMgdGhlIGdpdmVuIG51bWJlci4AAAAcR3JhbmRwYQABBEhyZXBvcnRfbWlzYmVoYXZpb3IEHF9yZXBvcnQUQnl0ZXMEZCBSZXBvcnQgc29tZSBtaXNiZWhhdmlvci4AAAAgVHJlYXN1cnkAAQw0cHJvcG9zZV9zcGVuZAgUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+LGJlbmVmaWNpYXJ5HEFkZHJlc3MkLQEgUHV0IGZvcndhcmQgYSBzdWdnZXN0aW9uIGZvciBzcGVuZGluZy4gQSBkZXBvc2l0IHByb3BvcnRpb25hbCB0byB0aGUgdmFsdWU1ASBpcyByZXNlcnZlZCBhbmQgc2xhc2hlZCBpZiB0aGUgcHJvcG9zYWwgaXMgcmVqZWN0ZWQuIEl0IGlzIHJldHVybmVkIG9uY2UgdGhlVCBwcm9wb3NhbCBpcyBhd2FyZGVkLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLpQgLSBPbmUgREIgY2hhbmdlLCBvbmUgZXh0cmEgREIgZW50cnkuMCAjIDwvd2VpZ2h0PjxyZWplY3RfcHJvcG9zYWwELHByb3Bvc2FsX2lkWENvbXBhY3Q8UHJvcG9zYWxJbmRleD4c/CBSZWplY3QgYSBwcm9wb3NlZCBzcGVuZC4gVGhlIG9yaWdpbmFsIGRlcG9zaXQgd2lsbCBiZSBzbGFzaGVkLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLkAgLSBPbmUgREIgY2xlYXIuMCAjIDwvd2VpZ2h0PkBhcHByb3ZlX3Byb3Bvc2FsBCxwcm9wb3NhbF9pZFhDb21wYWN0PFByb3Bvc2FsSW5kZXg+IF0BIEFwcHJvdmUgYSBwcm9wb3NhbC4gQXQgYSBsYXRlciB0aW1lLCB0aGUgcHJvcG9zYWwgd2lsbCBiZSBhbGxvY2F0ZWQgdG8gdGhlIGJlbmVmaWNpYXJ5rCBhbmQgdGhlIG9yaWdpbmFsIGRlcG9zaXQgd2lsbCBiZSByZXR1cm5lZC4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuZCAtIExpbWl0ZWQgc3RvcmFnZSByZWFkcy5EIC0gT25lIERCIGNoYW5nZS4wICMgPC93ZWlnaHQ+AAAAJENvbnRyYWN0cwABFDx1cGRhdGVfc2NoZWR1bGUEIHNjaGVkdWxlIFNjaGVkdWxlDLQgVXBkYXRlcyB0aGUgc2NoZWR1bGUgZm9yIG1ldGVyaW5nIGNvbnRyYWN0cy4ADQEgVGhlIHNjaGVkdWxlIG11c3QgaGF2ZSBhIGdyZWF0ZXIgdmVyc2lvbiB0aGFuIHRoZSBzdG9yZWQgc2NoZWR1bGUuIHB1dF9jb2RlCCRnYXNfbGltaXQwQ29tcGFjdDxHYXM+EGNvZGUUQnl0ZXMIXQEgU3RvcmVzIHRoZSBnaXZlbiBiaW5hcnkgV2FzbSBjb2RlIGludG8gdGhlIGNoYWluJ3Mgc3RvcmFnZSBhbmQgcmV0dXJucyBpdHMgYGNvZGVoYXNoYC7UIFlvdSBjYW4gaW5zdGFudGlhdGUgY29udHJhY3RzIG9ubHkgd2l0aCBzdG9yZWQgY29kZS4QY2FsbBAQZGVzdBxBZGRyZXNzFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPiRnYXNfbGltaXQwQ29tcGFjdDxHYXM+EGRhdGEUQnl0ZXMcCQEgTWFrZXMgYSBjYWxsIHRvIGFuIGFjY291bnQsIG9wdGlvbmFsbHkgdHJhbnNmZXJyaW5nIHNvbWUgYmFsYW5jZS4AKQEgKiBJZiB0aGUgYWNjb3VudCBpcyBhIHNtYXJ0LWNvbnRyYWN0IGFjY291bnQsIHRoZSBhc3NvY2lhdGVkIGNvZGUgd2lsbCBiZbAgZXhlY3V0ZWQgYW5kIGFueSB2YWx1ZSB3aWxsIGJlIHRyYW5zZmVycmVkLhkBICogSWYgdGhlIGFjY291bnQgaXMgYSByZWd1bGFyIGFjY291bnQsIGFueSB2YWx1ZSB3aWxsIGJlIHRyYW5zZmVycmVkLkkBICogSWYgbm8gYWNjb3VudCBleGlzdHMgYW5kIHRoZSBjYWxsIHZhbHVlIGlzIG5vdCBsZXNzIHRoYW4gYGV4aXN0ZW50aWFsX2RlcG9zaXRgLBUBIGEgcmVndWxhciBhY2NvdW50IHdpbGwgYmUgY3JlYXRlZCBhbmQgYW55IHZhbHVlIHdpbGwgYmUgdHJhbnNmZXJyZWQuLGluc3RhbnRpYXRlECRlbmRvd21lbnRIQ29tcGFjdDxCYWxhbmNlT2Y+JGdhc19saW1pdDBDb21wYWN0PEdhcz4kY29kZV9oYXNoIENvZGVIYXNoEGRhdGEUQnl0ZXMovQEgSW5zdGFudGlhdGVzIGEgbmV3IGNvbnRyYWN0IGZyb20gdGhlIGBjb2RlaGFzaGAgZ2VuZXJhdGVkIGJ5IGBwdXRfY29kZWAsIG9wdGlvbmFsbHkgdHJhbnNmZXJyaW5nIHNvbWUgYmFsYW5jZS4AmCBJbnN0YW50aWF0aW9uIGlzIGV4ZWN1dGVkIGFzIGZvbGxvd3M6AEEBIC0gVGhlIGRlc3RpbmF0aW9uIGFkZHJlc3MgaXMgY29tcHV0ZWQgYmFzZWQgb24gdGhlIHNlbmRlciBhbmQgaGFzaCBvZiB0aGUgY29kZS4FASAtIFRoZSBzbWFydC1jb250cmFjdCBhY2NvdW50IGlzIGNyZWF0ZWQgYXQgdGhlIGNvbXB1dGVkIGFkZHJlc3MubQEgLSBUaGUgYGN0b3JfY29kZWAgaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlIG5ld2x5LWNyZWF0ZWQgYWNjb3VudC4gQnVmZmVyIHJldHVybmVkXQEgICBhZnRlciB0aGUgZXhlY3V0aW9uIGlzIHNhdmVkIGFzIHRoZSBgY29kZWAgb2YgdGhlIGFjY291bnQuIFRoYXQgY29kZSB3aWxsIGJlIGludm9rZWSoICAgdXBvbiBhbnkgY2FsbCByZWNlaXZlZCBieSB0aGlzIGFjY291bnQufCAtIFRoZSBjb250cmFjdCBpcyBpbml0aWFsaXplZC48Y2xhaW1fc3VyY2hhcmdlCBBkZXN0JEFjY291bnRJZChhdXhfc2VuZGVyRE9wdGlvbjxBY2NvdW50SWQ+FHEBIEFsbG93cyBibG9jayBwcm9kdWNlcnMgdG8gY2xhaW0gYSBzbWFsbCByZXdhcmQgZm9yIGV2aWN0aW5nIGEgY29udHJhY3QuIElmIGEgYmxvY2sgcHJvZHVjZXIVASBmYWlscyB0byBkbyBzbywgYSByZWd1bGFyIHVzZXJzIHdpbGwgYmUgYWxsb3dlZCB0byBjbGFpbSB0aGUgcmV3YXJkLgA5ASBJZiBjb250cmFjdCBpcyBub3QgZXZpY3RlZCBhcyBhIHJlc3VsdCBvZiB0aGlzIGNhbGwsIG5vIGFjdGlvbnMgYXJlIHRha2VuIGFuZKwgdGhlIHNlbmRlciBpcyBub3QgZWxpZ2libGUgZm9yIHRoZSByZXdhcmQuAAAAEFN1ZG8AAQwQc3VkbwQgcHJvcG9zYWwgUHJvcG9zYWwoOQEgQXV0aGVudGljYXRlcyB0aGUgc3VkbyBrZXkgYW5kIGRpc3BhdGNoZXMgYSBmdW5jdGlvbiBjYWxsIHdpdGggYFJvb3RgIG9yaWdpbi4A0CBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXy4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuZCAtIExpbWl0ZWQgc3RvcmFnZSByZWFkcy5gIC0gT25lIERCIHdyaXRlIChldmVudCku1CAtIFVua25vd24gd2VpZ2h0IG9mIGRlcml2YXRpdmUgYHByb3Bvc2FsYCBleGVjdXRpb24uMCAjIDwvd2VpZ2h0PhxzZXRfa2V5BAxuZXccQWRkcmVzcyR1ASBBdXRoZW50aWNhdGVzIHRoZSBjdXJyZW50IHN1ZG8ga2V5IGFuZCBzZXRzIHRoZSBnaXZlbiBBY2NvdW50SWQgKGBuZXdgKSBhcyB0aGUgbmV3IHN1ZG8ga2V5LgDQIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLkQgLSBPbmUgREIgY2hhbmdlLjAgIyA8L3dlaWdodD4cc3Vkb19hcwgMd2hvHEFkZHJlc3MgcHJvcG9zYWwgUHJvcG9zYWwsUQEgQXV0aGVudGljYXRlcyB0aGUgc3VkbyBrZXkgYW5kIGRpc3BhdGNoZXMgYSBmdW5jdGlvbiBjYWxsIHdpdGggYFNpZ25lZGAgb3JpZ2luIGZyb21EIGEgZ2l2ZW4gYWNjb3VudC4A0CBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXy4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuZCAtIExpbWl0ZWQgc3RvcmFnZSByZWFkcy5gIC0gT25lIERCIHdyaXRlIChldmVudCku1CAtIFVua25vd24gd2VpZ2h0IG9mIGRlcml2YXRpdmUgYHByb3Bvc2FsYCBleGVjdXRpb24uMCAjIDwvd2VpZ2h0PgAAACBJbU9ubGluZQABBCRoZWFydGJlYXQIJGhlYXJ0YmVhdCRIZWFydGJlYXQkc2lnbmF0dXJlJFNpZ25hdHVyZQAAAABIQXV0aG9yaXR5RGlzY292ZXJ5AAEAAAAAIE9mZmVuY2VzAAEAAAAAYFJhbmRvbW5lc3NDb2xsZWN0aXZlRmxpcAABAAAAAA==';

export default meta;
