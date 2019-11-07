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
	'bWV0YQhsGFN5c3RlbQABHChmaWxsX2Jsb2NrAAQhASBBIGJpZyBkaXNwYXRjaCB0aGF0IHdpbGwgZGlzYWxsb3cgYW55IG90aGVyIHRyYW5zYWN0aW9uIHRvIGJlIGluY2x1ZGVkLhhyZW1hcmsEHF9yZW1hcmsUQnl0ZXMEbCBNYWtlIHNvbWUgb24tY2hhaW4gcmVtYXJrLjhzZXRfaGVhcF9wYWdlcwQUcGFnZXMMdTY0BPwgU2V0IHRoZSBudW1iZXIgb2YgcGFnZXMgaW4gdGhlIFdlYkFzc2VtYmx5IGVudmlyb25tZW50J3MgaGVhcC4gc2V0X2NvZGUEDG5ldxRCeXRlcwRIIFNldCB0aGUgbmV3IGNvZGUuLHNldF9zdG9yYWdlBBRpdGVtczRWZWM8S2V5VmFsdWU+BGwgU2V0IHNvbWUgaXRlbXMgb2Ygc3RvcmFnZS4wa2lsbF9zdG9yYWdlBBBrZXlzIFZlYzxLZXk+BHggS2lsbCBzb21lIGl0ZW1zIGZyb20gc3RvcmFnZS4sa2lsbF9wcmVmaXgEGHByZWZpeAxLZXkEFQEgS2lsbCBhbGwgc3RvcmFnZSBpdGVtcyB3aXRoIGEga2V5IHRoYXQgc3RhcnRzIHdpdGggdGhlIGdpdmVuIHByZWZpeC4AAABgUmFuZG9tbmVzc0NvbGxlY3RpdmVGbGlwAAAAAAAQQmFiZQABAAAAACRUaW1lc3RhbXAAAQQMc2V0BAxub3c8Q29tcGFjdDxNb21lbnQ+JFggU2V0IHRoZSBjdXJyZW50IHRpbWUuAFkBIFRoaXMgY2FsbCBzaG91bGQgYmUgaW52b2tlZCBleGFjdGx5IG9uY2UgcGVyIGJsb2NrLiBJdCB3aWxsIHBhbmljIGF0IHRoZSBmaW5hbGl6YXRpb27YIHBoYXNlLCBpZiB0aGlzIGNhbGwgaGFzbid0IGJlZW4gaW52b2tlZCBieSB0aGF0IHRpbWUuAEUBIFRoZSB0aW1lc3RhbXAgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiB0aGUgcHJldmlvdXMgb25lIGJ5IHRoZSBhbW91bnQgc3BlY2lmaWVkIGJ5RCBgTWluaW11bVBlcmlvZGAuANggVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgYEluaGVyZW50YC4AAAAcSW5kaWNlcwABAAAAACBCYWxhbmNlcwABDCB0cmFuc2ZlcggQZGVzdBxBZGRyZXNzFHZhbHVlQENvbXBhY3Q8QmFsYW5jZT5c2CBUcmFuc2ZlciBzb21lIGxpcXVpZCBmcmVlIGJhbGFuY2UgdG8gYW5vdGhlciBhY2NvdW50LgAJASBgdHJhbnNmZXJgIHdpbGwgc2V0IHRoZSBgRnJlZUJhbGFuY2VgIG9mIHRoZSBzZW5kZXIgYW5kIHJlY2VpdmVyLiEBIEl0IHdpbGwgZGVjcmVhc2UgdGhlIHRvdGFsIGlzc3VhbmNlIG9mIHRoZSBzeXN0ZW0gYnkgdGhlIGBUcmFuc2ZlckZlZWAuFQEgSWYgdGhlIHNlbmRlcidzIGFjY291bnQgaXMgYmVsb3cgdGhlIGV4aXN0ZW50aWFsIGRlcG9zaXQgYXMgYSByZXN1bHS0IG9mIHRoZSB0cmFuc2ZlciwgdGhlIGFjY291bnQgd2lsbCBiZSByZWFwZWQuABkBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIGBTaWduZWRgIGJ5IHRoZSB0cmFuc2FjdG9yLgAsICMgPHdlaWdodD4xASAtIERlcGVuZGVudCBvbiBhcmd1bWVudHMgYnV0IG5vdCBjcml0aWNhbCwgZ2l2ZW4gcHJvcGVyIGltcGxlbWVudGF0aW9ucyBmb3LMICAgaW5wdXQgY29uZmlnIHR5cGVzLiBTZWUgcmVsYXRlZCBmdW5jdGlvbnMgYmVsb3cuaQEgLSBJdCBjb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzIGFuZCB3cml0ZXMgaW50ZXJuYWxseSBhbmQgbm8gY29tcGxleCBjb21wdXRhdGlvbi4ATCBSZWxhdGVkIGZ1bmN0aW9uczoAUQEgICAtIGBlbnN1cmVfY2FuX3dpdGhkcmF3YCBpcyBhbHdheXMgY2FsbGVkIGludGVybmFsbHkgYnV0IGhhcyBhIGJvdW5kZWQgY29tcGxleGl0eS4tASAgIC0gVHJhbnNmZXJyaW5nIGJhbGFuY2VzIHRvIGFjY291bnRzIHRoYXQgZGlkIG5vdCBleGlzdCBiZWZvcmUgd2lsbCBjYXVzZdQgICAgICBgVDo6T25OZXdBY2NvdW50Ojpvbl9uZXdfYWNjb3VudGAgdG8gYmUgY2FsbGVkLtwgICAtIFJlbW92aW5nIGVub3VnaCBmdW5kcyBmcm9tIGFuIGFjY291bnQgd2lsbCB0cmlnZ2VyWQEgICAgIGBUOjpEdXN0UmVtb3ZhbDo6b25fdW5iYWxhbmNlZGAgYW5kIGBUOjpPbkZyZWVCYWxhbmNlWmVybzo6b25fZnJlZV9iYWxhbmNlX3plcm9gLgAwICMgPC93ZWlnaHQ+LHNldF9iYWxhbmNlDAx3aG8cQWRkcmVzcyBuZXdfZnJlZUBDb21wYWN0PEJhbGFuY2U+MG5ld19yZXNlcnZlZEBDb21wYWN0PEJhbGFuY2U+NJQgU2V0IHRoZSBiYWxhbmNlcyBvZiBhIGdpdmVuIGFjY291bnQuACEBIFRoaXMgd2lsbCBhbHRlciBgRnJlZUJhbGFuY2VgIGFuZCBgUmVzZXJ2ZWRCYWxhbmNlYCBpbiBzdG9yYWdlLiBpdCB3aWxsCQEgYWxzbyBkZWNyZWFzZSB0aGUgdG90YWwgaXNzdWFuY2Ugb2YgdGhlIHN5c3RlbSAoYFRvdGFsSXNzdWFuY2VgKS4ZASBJZiB0aGUgbmV3IGZyZWUgb3IgcmVzZXJ2ZWQgYmFsYW5jZSBpcyBiZWxvdyB0aGUgZXhpc3RlbnRpYWwgZGVwb3NpdCzoIGl0IHdpbGwgcmVzZXQgdGhlIGFjY291bnQgbm9uY2UgKGBzeXN0ZW06OkFjY291bnROb25jZWApLgC0IFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBpcyBgcm9vdGAuACwgIyA8d2VpZ2h0PoAgLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLsQgLSBDb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzIGFuZCB3cml0ZXMuMCAjIDwvd2VpZ2h0Pjhmb3JjZV90cmFuc2ZlcgwYc291cmNlHEFkZHJlc3MQZGVzdBxBZGRyZXNzFHZhbHVlQENvbXBhY3Q8QmFsYW5jZT4IUQEgRXhhY3RseSBhcyBgdHJhbnNmZXJgLCBleGNlcHQgdGhlIG9yaWdpbiBtdXN0IGJlIHJvb3QgYW5kIHRoZSBzb3VyY2UgYWNjb3VudCBtYXkgYmUsIHNwZWNpZmllZC4AAABIVHJhbnNhY3Rpb25QYXltZW50AAAAAAAoQXV0aG9yc2hpcAABBChzZXRfdW5jbGVzBChuZXdfdW5jbGVzLFZlYzxIZWFkZXI+BGQgUHJvdmlkZSBhIHNldCBvZiB1bmNsZXMuAAAAHFN0YWtpbmcAATwQYm9uZAwoY29udHJvbGxlchxBZGRyZXNzFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPhRwYXllZURSZXdhcmREZXN0aW5hdGlvbjxlASBUYWtlIHRoZSBvcmlnaW4gYWNjb3VudCBhcyBhIHN0YXNoIGFuZCBsb2NrIHVwIGB2YWx1ZWAgb2YgaXRzIGJhbGFuY2UuIGBjb250cm9sbGVyYCB3aWxshCBiZSB0aGUgYWNjb3VudCB0aGF0IGNvbnRyb2xzIGl0LgAxASBgdmFsdWVgIG11c3QgYmUgbW9yZSB0aGFuIHRoZSBgbWluaW11bV9iYWxhbmNlYCBzcGVjaWZpZWQgYnkgYFQ6OkN1cnJlbmN5YC4AJQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIHN0YXNoIGFjY291bnQuACwgIyA8d2VpZ2h0PtQgLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLiBNb2RlcmF0ZSBjb21wbGV4aXR5LiAgLSBPKDEpLmggLSBUaHJlZSBleHRyYSBEQiBlbnRyaWVzLgBtASBOT1RFOiBUd28gb2YgdGhlIHN0b3JhZ2Ugd3JpdGVzIChgU2VsZjo6Ym9uZGVkYCwgYFNlbGY6OnBheWVlYCkgYXJlIF9uZXZlcl8gY2xlYW5lZCB1bmxlc3MlASB0aGUgYG9yaWdpbmAgZmFsbHMgYmVsb3cgX2V4aXN0ZW50aWFsIGRlcG9zaXRfIGFuZCBnZXRzIHJlbW92ZWQgYXMgZHVzdC4wICMgPC93ZWlnaHQ+KGJvbmRfZXh0cmEEOG1heF9hZGRpdGlvbmFsSENvbXBhY3Q8QmFsYW5jZU9mPjhlASBBZGQgc29tZSBleHRyYSBhbW91bnQgdGhhdCBoYXZlIGFwcGVhcmVkIGluIHRoZSBzdGFzaCBgZnJlZV9iYWxhbmNlYCBpbnRvIHRoZSBiYWxhbmNlIHVwNCBmb3Igc3Rha2luZy4AUQEgVXNlIHRoaXMgaWYgdGhlcmUgYXJlIGFkZGl0aW9uYWwgZnVuZHMgaW4geW91ciBzdGFzaCBhY2NvdW50IHRoYXQgeW91IHdpc2ggdG8gYm9uZC5lASBVbmxpa2UgW2Bib25kYF0gb3IgW2B1bmJvbmRgXSB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IGltcG9zZSBhbnkgbGltaXRhdGlvbiBvbiB0aGUgYW1vdW50TCB0aGF0IGNhbiBiZSBhZGRlZC4AVQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIHN0YXNoLCBub3QgdGhlIGNvbnRyb2xsZXIuACwgIyA8d2VpZ2h0PuggLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLiBJbnNpZ25pZmljYW50IGNvbXBsZXhpdHkuICAtIE8oMSkuQCAtIE9uZSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+GHVuYm9uZAQUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+XFUBIFNjaGVkdWxlIGEgcG9ydGlvbiBvZiB0aGUgc3Rhc2ggdG8gYmUgdW5sb2NrZWQgcmVhZHkgZm9yIHRyYW5zZmVyIG91dCBhZnRlciB0aGUgYm9uZAEBIHBlcmlvZCBlbmRzLiBJZiB0aGlzIGxlYXZlcyBhbiBhbW91bnQgYWN0aXZlbHkgYm9uZGVkIGxlc3MgdGhhbiUBIFQ6OkN1cnJlbmN5OjptaW5pbXVtX2JhbGFuY2UoKSwgdGhlbiBpdCBpcyBpbmNyZWFzZWQgdG8gdGhlIGZ1bGwgYW1vdW50LgBJASBPbmNlIHRoZSB1bmxvY2sgcGVyaW9kIGlzIGRvbmUsIHlvdSBjYW4gY2FsbCBgd2l0aGRyYXdfdW5ib25kZWRgIHRvIGFjdHVhbGx5IG1vdmXAIHRoZSBmdW5kcyBvdXQgb2YgbWFuYWdlbWVudCByZWFkeSBmb3IgdHJhbnNmZXIuAD0BIE5vIG1vcmUgdGhhbiBhIGxpbWl0ZWQgbnVtYmVyIG9mIHVubG9ja2luZyBjaHVua3MgKHNlZSBgTUFYX1VOTE9DS0lOR19DSFVOS1NgKT0BIGNhbiBjby1leGlzdHMgYXQgdGhlIHNhbWUgdGltZS4gSW4gdGhhdCBjYXNlLCBbYENhbGw6OndpdGhkcmF3X3VuYm9uZGVkYF0gbmVlZPwgdG8gYmUgY2FsbGVkIGZpcnN0IHRvIHJlbW92ZSBzb21lIG9mIHRoZSBjaHVua3MgKGlmIHBvc3NpYmxlKS4AVQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIGNvbnRyb2xsZXIsIG5vdCB0aGUgc3Rhc2guAJggU2VlIGFsc28gW2BDYWxsOjp3aXRoZHJhd191bmJvbmRlZGBdLgAsICMgPHdlaWdodD5BASAtIEluZGVwZW5kZW50IG9mIHRoZSBhcmd1bWVudHMuIExpbWl0ZWQgYnV0IHBvdGVudGlhbGx5IGV4cGxvaXRhYmxlIGNvbXBsZXhpdHkumCAtIENvbnRhaW5zIGEgbGltaXRlZCBudW1iZXIgb2YgcmVhZHMuZQEgLSBFYWNoIGNhbGwgKHJlcXVpcmVzIHRoZSByZW1haW5kZXIgb2YgdGhlIGJvbmRlZCBiYWxhbmNlIHRvIGJlIGFib3ZlIGBtaW5pbXVtX2JhbGFuY2VgKXEBICAgd2lsbCBjYXVzZSBhIG5ldyBlbnRyeSB0byBiZSBpbnNlcnRlZCBpbnRvIGEgdmVjdG9yIChgTGVkZ2VyLnVubG9ja2luZ2ApIGtlcHQgaW4gc3RvcmFnZS6lASAgIFRoZSBvbmx5IHdheSB0byBjbGVhbiB0aGUgYWZvcmVtZW50aW9uZWQgc3RvcmFnZSBpdGVtIGlzIGFsc28gdXNlci1jb250cm9sbGVkIHZpYSBgd2l0aGRyYXdfdW5ib25kZWRgLkAgLSBPbmUgREIgZW50cnkuKCA8L3dlaWdodD5Ed2l0aGRyYXdfdW5ib25kZWQAQC0BIFJlbW92ZSBhbnkgdW5sb2NrZWQgY2h1bmtzIGZyb20gdGhlIGB1bmxvY2tpbmdgIHF1ZXVlIGZyb20gb3VyIG1hbmFnZW1lbnQuADUBIFRoaXMgZXNzZW50aWFsbHkgZnJlZXMgdXAgdGhhdCBiYWxhbmNlIHRvIGJlIHVzZWQgYnkgdGhlIHN0YXNoIGFjY291bnQgdG8gZG9MIHdoYXRldmVyIGl0IHdhbnRzLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgY29udHJvbGxlciwgbm90IHRoZSBzdGFzaC4AbCBTZWUgYWxzbyBbYENhbGw6OnVuYm9uZGBdLgAsICMgPHdlaWdodD5VASAtIENvdWxkIGJlIGRlcGVuZGVudCBvbiB0aGUgYG9yaWdpbmAgYXJndW1lbnQgYW5kIGhvdyBtdWNoIGB1bmxvY2tpbmdgIGNodW5rcyBleGlzdC5FASAgSXQgaW1wbGllcyBgY29uc29saWRhdGVfdW5sb2NrZWRgIHdoaWNoIGxvb3BzIG92ZXIgYExlZGdlci51bmxvY2tpbmdgLCB3aGljaCBpc/QgIGluZGlyZWN0bHkgdXNlci1jb250cm9sbGVkLiBTZWUgW2B1bmJvbmRgXSBmb3IgbW9yZSBkZXRhaWwueQEgLSBDb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzLCB5ZXQgdGhlIHNpemUgb2Ygd2hpY2ggY291bGQgYmUgbGFyZ2UgYmFzZWQgb24gYGxlZGdlcmAuyCAtIFdyaXRlcyBhcmUgbGltaXRlZCB0byB0aGUgYG9yaWdpbmAgYWNjb3VudCBrZXkuMCAjIDwvd2VpZ2h0PiB2YWxpZGF0ZQQUcHJlZnM4VmFsaWRhdG9yUHJlZnMs6CBEZWNsYXJlIHRoZSBkZXNpcmUgdG8gdmFsaWRhdGUgZm9yIHRoZSBvcmlnaW4gY29udHJvbGxlci4A3CBFZmZlY3RzIHdpbGwgYmUgZmVsdCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGVyYS4AVQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8gYnkgdGhlIGNvbnRyb2xsZXIsIG5vdCB0aGUgc3Rhc2guACwgIyA8d2VpZ2h0PuggLSBJbmRlcGVuZGVudCBvZiB0aGUgYXJndW1lbnRzLiBJbnNpZ25pZmljYW50IGNvbXBsZXhpdHkumCAtIENvbnRhaW5zIGEgbGltaXRlZCBudW1iZXIgb2YgcmVhZHMuyCAtIFdyaXRlcyBhcmUgbGltaXRlZCB0byB0aGUgYG9yaWdpbmAgYWNjb3VudCBrZXkuMCAjIDwvd2VpZ2h0PiBub21pbmF0ZQQcdGFyZ2V0czBWZWM8QWRkcmVzcz4sEQEgRGVjbGFyZSB0aGUgZGVzaXJlIHRvIG5vbWluYXRlIGB0YXJnZXRzYCBmb3IgdGhlIG9yaWdpbiBjb250cm9sbGVyLgDcIEVmZmVjdHMgd2lsbCBiZSBmZWx0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5leHQgZXJhLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgY29udHJvbGxlciwgbm90IHRoZSBzdGFzaC4ALCAjIDx3ZWlnaHQ+JQEgLSBUaGUgdHJhbnNhY3Rpb24ncyBjb21wbGV4aXR5IGlzIHByb3BvcnRpb25hbCB0byB0aGUgc2l6ZSBvZiBgdGFyZ2V0c2AsmCB3aGljaCBpcyBjYXBwZWQgYXQgYE1BWF9OT01JTkFUSU9OU2Au2CAtIEJvdGggdGhlIHJlYWRzIGFuZCB3cml0ZXMgZm9sbG93IGEgc2ltaWxhciBwYXR0ZXJuLjAgIyA8L3dlaWdodD4UY2hpbGwALMggRGVjbGFyZSBubyBkZXNpcmUgdG8gZWl0aGVyIHZhbGlkYXRlIG9yIG5vbWluYXRlLgDcIEVmZmVjdHMgd2lsbCBiZSBmZWx0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5leHQgZXJhLgBVASBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXyBieSB0aGUgY29udHJvbGxlciwgbm90IHRoZSBzdGFzaC4ALCAjIDx3ZWlnaHQ+6CAtIEluZGVwZW5kZW50IG9mIHRoZSBhcmd1bWVudHMuIEluc2lnbmlmaWNhbnQgY29tcGxleGl0eS5UIC0gQ29udGFpbnMgb25lIHJlYWQuyCAtIFdyaXRlcyBhcmUgbGltaXRlZCB0byB0aGUgYG9yaWdpbmAgYWNjb3VudCBrZXkuMCAjIDwvd2VpZ2h0PiRzZXRfcGF5ZWUEFHBheWVlRFJld2FyZERlc3RpbmF0aW9uLLggKFJlLSlzZXQgdGhlIHBheW1lbnQgdGFyZ2V0IGZvciBhIGNvbnRyb2xsZXIuANwgRWZmZWN0cyB3aWxsIGJlIGZlbHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBlcmEuAFUBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfIGJ5IHRoZSBjb250cm9sbGVyLCBub3QgdGhlIHN0YXNoLgAsICMgPHdlaWdodD7oIC0gSW5kZXBlbmRlbnQgb2YgdGhlIGFyZ3VtZW50cy4gSW5zaWduaWZpY2FudCBjb21wbGV4aXR5LpggLSBDb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzLsggLSBXcml0ZXMgYXJlIGxpbWl0ZWQgdG8gdGhlIGBvcmlnaW5gIGFjY291bnQga2V5LjAgIyA8L3dlaWdodD44c2V0X2NvbnRyb2xsZXIEKGNvbnRyb2xsZXIcQWRkcmVzcyyQIChSZS0pc2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc3Rhc2guANwgRWZmZWN0cyB3aWxsIGJlIGZlbHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBlcmEuAFUBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfIGJ5IHRoZSBzdGFzaCwgbm90IHRoZSBjb250cm9sbGVyLgAsICMgPHdlaWdodD7oIC0gSW5kZXBlbmRlbnQgb2YgdGhlIGFyZ3VtZW50cy4gSW5zaWduaWZpY2FudCBjb21wbGV4aXR5LpggLSBDb250YWlucyBhIGxpbWl0ZWQgbnVtYmVyIG9mIHJlYWRzLsggLSBXcml0ZXMgYXJlIGxpbWl0ZWQgdG8gdGhlIGBvcmlnaW5gIGFjY291bnQga2V5LjAgIyA8L3dlaWdodD5Mc2V0X3ZhbGlkYXRvcl9jb3VudAQMbmV3MENvbXBhY3Q8dTMyPgSAIFRoZSBpZGVhbCBudW1iZXIgb2YgdmFsaWRhdG9ycy40Zm9yY2Vfbm9fZXJhcwAUsCBGb3JjZSB0aGVyZSB0byBiZSBubyBuZXcgZXJhcyBpbmRlZmluaXRlbHkuACwgIyA8d2VpZ2h0PkAgLSBObyBhcmd1bWVudHMuMCAjIDwvd2VpZ2h0PjRmb3JjZV9uZXdfZXJhABhNASBGb3JjZSB0aGVyZSB0byBiZSBhIG5ldyBlcmEgYXQgdGhlIGVuZCBvZiB0aGUgbmV4dCBzZXNzaW9uLiBBZnRlciB0aGlzLCBpdCB3aWxsIGJloCByZXNldCB0byBub3JtYWwgKG5vbi1mb3JjZWQpIGJlaGF2aW91ci4ALCAjIDx3ZWlnaHQ+QCAtIE5vIGFyZ3VtZW50cy4wICMgPC93ZWlnaHQ+RHNldF9pbnZ1bG5lcmFibGVzBCh2YWxpZGF0b3JzOFZlYzxBY2NvdW50SWQ+BMwgU2V0IHRoZSB2YWxpZGF0b3JzIHdobyBjYW5ub3QgYmUgc2xhc2hlZCAoaWYgYW55KS40Zm9yY2VfdW5zdGFrZQQUc3Rhc2gkQWNjb3VudElkBA0BIEZvcmNlIGEgY3VycmVudCBzdGFrZXIgdG8gYmVjb21lIGNvbXBsZXRlbHkgdW5zdGFrZWQsIGltbWVkaWF0ZWx5LlBmb3JjZV9uZXdfZXJhX2Fsd2F5cwAUBQEgRm9yY2UgdGhlcmUgdG8gYmUgYSBuZXcgZXJhIGF0IHRoZSBlbmQgb2Ygc2Vzc2lvbnMgaW5kZWZpbml0ZWx5LgAsICMgPHdlaWdodD5QIC0gT25lIHN0b3JhZ2Ugd3JpdGUwICMgPC93ZWlnaHQ+AAAAIE9mZmVuY2VzAAEAAAAAHFNlc3Npb24AAQQgc2V0X2tleXMIEGtleXMQS2V5cxRwcm9vZhRCeXRlcyjkIFNldHMgdGhlIHNlc3Npb24ga2V5KHMpIG9mIHRoZSBmdW5jdGlvbiBjYWxsZXIgdG8gYGtleWAuIQEgQWxsb3dzIGFuIGFjY291bnQgdG8gc2V0IGl0cyBzZXNzaW9uIGtleSBwcmlvciB0byBiZWNvbWluZyBhIHZhbGlkYXRvci7EIFRoaXMgZG9lc24ndCB0YWtlIGVmZmVjdCB1bnRpbCB0aGUgbmV4dCBzZXNzaW9uLgDUIFRoZSBkaXNwYXRjaCBvcmlnaW4gb2YgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHNpZ25lZC4ALCAjIDx3ZWlnaHQ+iCAtIE8obG9nIG4pIGluIG51bWJlciBvZiBhY2NvdW50cy5YIC0gT25lIGV4dHJhIERCIGVudHJ5LjAgIyA8L3dlaWdodD4AAAA8RmluYWxpdHlUcmFja2VyAAEEKGZpbmFsX2hpbnQEEGhpbnRQQ29tcGFjdDxCbG9ja051bWJlcj4I9CBIaW50IHRoYXQgdGhlIGF1dGhvciBvZiB0aGlzIGJsb2NrIHRoaW5rcyB0aGUgYmVzdCBmaW5hbGl6ZWRsIGJsb2NrIGlzIHRoZSBnaXZlbiBudW1iZXIuAAAAHEdyYW5kcGEAAQRIcmVwb3J0X21pc2JlaGF2aW9yBBxfcmVwb3J0FEJ5dGVzBGQgUmVwb3J0IHNvbWUgbWlzYmVoYXZpb3IuAAAAIEltT25saW5lAAEEJGhlYXJ0YmVhdAgkaGVhcnRiZWF0JEhlYXJ0YmVhdCRzaWduYXR1cmUkU2lnbmF0dXJlAAAAACREZW1vY3JhY3kAAUQccHJvcG9zZQggcHJvcG9zYWwgUHJvcG9zYWwUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+GKAgUHJvcG9zZSBhIHNlbnNpdGl2ZSBhY3Rpb24gdG8gYmUgdGFrZW4uACwgIyA8d2VpZ2h0PiAgLSBPKDEpLoAgLSBUd28gREIgY2hhbmdlcywgb25lIERCIGVudHJ5LjAgIyA8L3dlaWdodD4Yc2Vjb25kBCBwcm9wb3NhbEhDb21wYWN0PFByb3BJbmRleD4YoCBQcm9wb3NlIGEgc2Vuc2l0aXZlIGFjdGlvbiB0byBiZSB0YWtlbi4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuQCAtIE9uZSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+EHZvdGUIJHJlZl9pbmRleGBDb21wYWN0PFJlZmVyZW5kdW1JbmRleD4Qdm90ZRBWb3RlHDUBIFZvdGUgaW4gYSByZWZlcmVuZHVtLiBJZiBgdm90ZS5pc19heWUoKWAsIHRoZSB2b3RlIGlzIHRvIGVuYWN0IHRoZSBwcm9wb3NhbDu8IG90aGVyd2lzZSBpdCBpcyBhIHZvdGUgdG8ga2VlcCB0aGUgc3RhdHVzIHF1by4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkufCAtIE9uZSBEQiBjaGFuZ2UsIG9uZSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+KHByb3h5X3ZvdGUIJHJlZl9pbmRleGBDb21wYWN0PFJlZmVyZW5kdW1JbmRleD4Qdm90ZRBWb3RlHFEBIFZvdGUgaW4gYSByZWZlcmVuZHVtIG9uIGJlaGFsZiBvZiBhIHN0YXNoLiBJZiBgdm90ZS5pc19heWUoKWAsIHRoZSB2b3RlIGlzIHRvIGVuYWN0+CB0aGUgcHJvcG9zYWw7ICBvdGhlcndpc2UgaXQgaXMgYSB2b3RlIHRvIGtlZXAgdGhlIHN0YXR1cyBxdW8uACwgIyA8d2VpZ2h0PiAgLSBPKDEpLnwgLSBPbmUgREIgY2hhbmdlLCBvbmUgREIgZW50cnkuMCAjIDwvd2VpZ2h0PkBlbWVyZ2VuY3lfY2FuY2VsBCRyZWZfaW5kZXg8UmVmZXJlbmR1bUluZGV4CFEBIFNjaGVkdWxlIGFuIGVtZXJnZW5jeSBjYW5jZWxsYXRpb24gb2YgYSByZWZlcmVuZHVtLiBDYW5ub3QgaGFwcGVuIHR3aWNlIHRvIHRoZSBzYW1lMCByZWZlcmVuZHVtLkBleHRlcm5hbF9wcm9wb3NlBCBwcm9wb3NhbCBQcm9wb3NhbAgxASBTY2hlZHVsZSBhIHJlZmVyZW5kdW0gdG8gYmUgdGFibGVkIG9uY2UgaXQgaXMgbGVnYWwgdG8gc2NoZWR1bGUgYW4gZXh0ZXJuYWwwIHJlZmVyZW5kdW0uZGV4dGVybmFsX3Byb3Bvc2VfbWFqb3JpdHkEIHByb3Bvc2FsIFByb3Bvc2FsFFkBIFNjaGVkdWxlIGEgbWFqb3JpdHktY2FycmllcyByZWZlcmVuZHVtIHRvIGJlIHRhYmxlZCBuZXh0IG9uY2UgaXQgaXMgbGVnYWwgdG8gc2NoZWR1bGVgIGFuIGV4dGVybmFsIHJlZmVyZW5kdW0uAE0BIFVubGlrZSBgZXh0ZXJuYWxfcHJvcG9zZWAsIGJsYWNrbGlzdGluZyBoYXMgbm8gZWZmZWN0IG9uIHRoaXMgYW5kIGl0IG1heSByZXBsYWNlIGGcIHByZS1zY2hlZHVsZWQgYGV4dGVybmFsX3Byb3Bvc2VgIGNhbGwuYGV4dGVybmFsX3Byb3Bvc2VfZGVmYXVsdAQgcHJvcG9zYWwgUHJvcG9zYWwUSQEgU2NoZWR1bGUgYSBuZWdhdGl2ZS10dXJub3V0LWJpYXMgcmVmZXJlbmR1bSB0byBiZSB0YWJsZWQgbmV4dCBvbmNlIGl0IGlzIGxlZ2FsIHRvhCBzY2hlZHVsZSBhbiBleHRlcm5hbCByZWZlcmVuZHVtLgBNASBVbmxpa2UgYGV4dGVybmFsX3Byb3Bvc2VgLCBibGFja2xpc3RpbmcgaGFzIG5vIGVmZmVjdCBvbiB0aGlzIGFuZCBpdCBtYXkgcmVwbGFjZSBhnCBwcmUtc2NoZWR1bGVkIGBleHRlcm5hbF9wcm9wb3NlYCBjYWxsLihmYXN0X3RyYWNrDDRwcm9wb3NhbF9oYXNoEEhhc2g0dm90aW5nX3BlcmlvZCxCbG9ja051bWJlchRkZWxheSxCbG9ja051bWJlciRRASBTY2hlZHVsZSB0aGUgY3VycmVudGx5IGV4dGVybmFsbHktcHJvcG9zZWQgbWFqb3JpdHktY2FycmllcyByZWZlcmVuZHVtIHRvIGJlIHRhYmxlZGUBIGltbWVkaWF0ZWx5LiBJZiB0aGVyZSBpcyBubyBleHRlcm5hbGx5LXByb3Bvc2VkIHJlZmVyZW5kdW0gY3VycmVudGx5LCBvciBpZiB0aGVyZSBpcyBvbmXsIGJ1dCBpdCBpcyBub3QgYSBtYWpvcml0eS1jYXJyaWVzIHJlZmVyZW5kdW0gdGhlbiBpdCBmYWlscy4A+CAtIGBwcm9wb3NhbF9oYXNoYDogVGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgZXh0ZXJuYWwgcHJvcG9zYWwuYQEgLSBgdm90aW5nX3BlcmlvZGA6IFRoZSBwZXJpb2QgdGhhdCBpcyBhbGxvd2VkIGZvciB2b3Rpbmcgb24gdGhpcyBwcm9wb3NhbC4gSW5jcmVhc2VkIHRvmCAgIGBFbWVyZ2VuY3lWb3RpbmdQZXJpb2RgIGlmIHRvbyBsb3cuVQEgLSBgZGVsYXlgOiBUaGUgbnVtYmVyIG9mIGJsb2NrIGFmdGVyIHZvdGluZyBoYXMgZW5kZWQgaW4gYXBwcm92YWwgYW5kIHRoaXMgc2hvdWxkIGJlvCAgIGVuYWN0ZWQuIFRoaXMgZG9lc24ndCBoYXZlIGEgbWluaW11bSBhbW91bnQuNHZldG9fZXh0ZXJuYWwENHByb3Bvc2FsX2hhc2gQSGFzaAS8IFZldG8gYW5kIGJsYWNrbGlzdCB0aGUgZXh0ZXJuYWwgcHJvcG9zYWwgaGFzaC5EY2FuY2VsX3JlZmVyZW5kdW0EJHJlZl9pbmRleGBDb21wYWN0PFJlZmVyZW5kdW1JbmRleD4EVCBSZW1vdmUgYSByZWZlcmVuZHVtLjRjYW5jZWxfcXVldWVkDBB3aGVuUENvbXBhY3Q8QmxvY2tOdW1iZXI+FHdoaWNoMENvbXBhY3Q8dTMyPhB3aGF0YENvbXBhY3Q8UmVmZXJlbmR1bUluZGV4PgSgIENhbmNlbCBhIHByb3Bvc2FsIHF1ZXVlZCBmb3IgZW5hY3RtZW50LiRzZXRfcHJveHkEFHByb3h5JEFjY291bnRJZBSYIFNwZWNpZnkgYSBwcm94eS4gQ2FsbGVkIGJ5IHRoZSBzdGFzaC4ALCAjIDx3ZWlnaHQ+WCAtIE9uZSBleHRyYSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+MHJlc2lnbl9wcm94eQAUmCBDbGVhciB0aGUgcHJveHkuIENhbGxlZCBieSB0aGUgcHJveHkuACwgIyA8d2VpZ2h0PkAgLSBPbmUgREIgY2xlYXIuMCAjIDwvd2VpZ2h0PjByZW1vdmVfcHJveHkEFHByb3h5JEFjY291bnRJZBSYIENsZWFyIHRoZSBwcm94eS4gQ2FsbGVkIGJ5IHRoZSBzdGFzaC4ALCAjIDx3ZWlnaHQ+QCAtIE9uZSBEQiBjbGVhci4wICMgPC93ZWlnaHQ+IGRlbGVnYXRlCAh0byRBY2NvdW50SWQoY29udmljdGlvbihDb252aWN0aW9uFDwgRGVsZWdhdGUgdm90ZS4ALCAjIDx3ZWlnaHQ+WCAtIE9uZSBleHRyYSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+KHVuZGVsZWdhdGUAFEQgVW5kZWxlZ2F0ZSB2b3RlLgAsICMgPHdlaWdodD4gIC0gTygxKS4wICMgPC93ZWlnaHQ+AAAAHENvdW5jaWwAARAsc2V0X21lbWJlcnMELG5ld19tZW1iZXJzOFZlYzxBY2NvdW50SWQ+EFEBIFNldCB0aGUgY29sbGVjdGl2ZSdzIG1lbWJlcnNoaXAgbWFudWFsbHkgdG8gYG5ld19tZW1iZXJzYC4gQmUgbmljZSB0byB0aGUgY2hhaW4gYW5kXCBwcm92aWRlIGl0IHByZS1zb3J0ZWQuAFggUmVxdWlyZXMgcm9vdCBvcmlnaW4uHGV4ZWN1dGUEIHByb3Bvc2FsIFByb3Bvc2FsDPQgRGlzcGF0Y2ggYSBwcm9wb3NhbCBmcm9tIGEgbWVtYmVyIHVzaW5nIHRoZSBgTWVtYmVyYCBvcmlnaW4uAKwgT3JpZ2luIG11c3QgYmUgYSBtZW1iZXIgb2YgdGhlIGNvbGxlY3RpdmUuHHByb3Bvc2UIJHRocmVzaG9sZFBDb21wYWN0PE1lbWJlckNvdW50PiBwcm9wb3NhbCBQcm9wb3NhbBAsICMgPHdlaWdodD6QIC0gQm91bmRlZCBzdG9yYWdlIHJlYWRzIGFuZCB3cml0ZXMuuCAtIEFyZ3VtZW50IGB0aHJlc2hvbGRgIGhhcyBiZWFyaW5nIG9uIHdlaWdodC4wICMgPC93ZWlnaHQ+EHZvdGUMIHByb3Bvc2FsEEhhc2gUaW5kZXhYQ29tcGFjdDxQcm9wb3NhbEluZGV4PhxhcHByb3ZlEGJvb2wQLCAjIDx3ZWlnaHQ+jCAtIEJvdW5kZWQgc3RvcmFnZSByZWFkIGFuZCB3cml0ZXMuVQEgLSBXaWxsIGJlIHNsaWdodGx5IGhlYXZpZXIgaWYgdGhlIHByb3Bvc2FsIGlzIGFwcHJvdmVkIC8gZGlzYXBwcm92ZWQgYWZ0ZXIgdGhlIHZvdGUuMCAjIDwvd2VpZ2h0PgAAAEhUZWNobmljYWxDb21taXR0ZWUAARAsc2V0X21lbWJlcnMELG5ld19tZW1iZXJzOFZlYzxBY2NvdW50SWQ+EFEBIFNldCB0aGUgY29sbGVjdGl2ZSdzIG1lbWJlcnNoaXAgbWFudWFsbHkgdG8gYG5ld19tZW1iZXJzYC4gQmUgbmljZSB0byB0aGUgY2hhaW4gYW5kXCBwcm92aWRlIGl0IHByZS1zb3J0ZWQuAFggUmVxdWlyZXMgcm9vdCBvcmlnaW4uHGV4ZWN1dGUEIHByb3Bvc2FsIFByb3Bvc2FsDPQgRGlzcGF0Y2ggYSBwcm9wb3NhbCBmcm9tIGEgbWVtYmVyIHVzaW5nIHRoZSBgTWVtYmVyYCBvcmlnaW4uAKwgT3JpZ2luIG11c3QgYmUgYSBtZW1iZXIgb2YgdGhlIGNvbGxlY3RpdmUuHHByb3Bvc2UIJHRocmVzaG9sZFBDb21wYWN0PE1lbWJlckNvdW50PiBwcm9wb3NhbCBQcm9wb3NhbBAsICMgPHdlaWdodD6QIC0gQm91bmRlZCBzdG9yYWdlIHJlYWRzIGFuZCB3cml0ZXMuuCAtIEFyZ3VtZW50IGB0aHJlc2hvbGRgIGhhcyBiZWFyaW5nIG9uIHdlaWdodC4wICMgPC93ZWlnaHQ+EHZvdGUMIHByb3Bvc2FsEEhhc2gUaW5kZXhYQ29tcGFjdDxQcm9wb3NhbEluZGV4PhxhcHByb3ZlEGJvb2wQLCAjIDx3ZWlnaHQ+jCAtIEJvdW5kZWQgc3RvcmFnZSByZWFkIGFuZCB3cml0ZXMuVQEgLSBXaWxsIGJlIHNsaWdodGx5IGhlYXZpZXIgaWYgdGhlIHByb3Bvc2FsIGlzIGFwcHJvdmVkIC8gZGlzYXBwcm92ZWQgYWZ0ZXIgdGhlIHZvdGUuMCAjIDwvd2VpZ2h0PgAAAERFbGVjdGlvbnNQaHJhZ21lbgABFBB2b3RlCBR2b3RlczhWZWM8QWNjb3VudElkPhR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj48BQEgVm90ZSBmb3IgYSBzZXQgb2YgY2FuZGlkYXRlcyBmb3IgdGhlIHVwY29taW5nIHJvdW5kIG9mIGVsZWN0aW9uLgBQIFRoZSBgdm90ZXNgIHNob3VsZDpIICAgLSBub3QgYmUgZW1wdHkurCAgIC0gYmUgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2YgY2FuZGlkYXRlcy4AXQEgVXBvbiB2b3RpbmcsIGB2YWx1ZWAgdW5pdHMgb2YgYHdob2AncyBiYWxhbmNlIGlzIGxvY2tlZCBhbmQgYSBib25kIGFtb3VudCBpcyByZXNlcnZlZC5dASBJdCBpcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIGNhbGxlciB0byBub3QgcGxhY2UgYWxsIG9mIHRoZWlyIGJhbGFuY2UgaW50byB0aGUgbG9ja6AgYW5kIGtlZXAgc29tZSBmb3IgZnVydGhlciB0cmFuc2FjdGlvbnMuACwgIyA8d2VpZ2h0PiwgIyMjIyBTdGF0ZTAgUmVhZHM6IE8oMSnIIFdyaXRlczogTyhWKSBnaXZlbiBgVmAgdm90ZXMuIFYgaXMgYm91bmRlZCBieSAxNi4wICMgPC93ZWlnaHQ+MHJlbW92ZV92b3RlcgAcIQEgUmVtb3ZlIGBvcmlnaW5gIGFzIGEgdm90ZXIuIFRoaXMgcmVtb3ZlcyB0aGUgbG9jayBhbmQgcmV0dXJucyB0aGUgYm9uZC4ALCAjIDx3ZWlnaHQ+LCAjIyMjIFN0YXRlMCBSZWFkczogTygxKTQgV3JpdGVzOiBPKDEpMCAjIDwvd2VpZ2h0PlByZXBvcnRfZGVmdW5jdF92b3RlcgQYdGFyZ2V0HEFkZHJlc3M0XQEgUmVwb3J0IGB0YXJnZXRgIGZvciBiZWluZyBhbiBkZWZ1bmN0IHZvdGVyLiBJbiBjYXNlIG9mIGEgdmFsaWQgcmVwb3J0LCB0aGUgcmVwb3J0ZXIgaXNdASByZXdhcmRlZCBieSB0aGUgYm9uZCBhbW91bnQgb2YgYHRhcmdldGAuIE90aGVyd2lzZSwgdGhlIHJlcG9ydGVyIGl0c2VsZiBpcyByZW1vdmVkIGFuZFwgdGhlaXIgYm9uZCBpcyBzbGFzaGVkLgCIIEEgZGVmdW5jdCB2b3RlciBpcyBkZWZpbmVkIHRvIGJlOk0BICAgLSBhIHZvdGVyIHdob3NlIGN1cnJlbnQgc3VibWl0dGVkIHZvdGVzIGFyZSBhbGwgaW52YWxpZC4gaS5lLiBhbGwgb2YgdGhlbSBhcmUgbm+0ICAgICBsb25nZXIgYSBjYW5kaWRhdGUgbm9yIGFuIGFjdGl2ZSBtZW1iZXIuACwgIyA8d2VpZ2h0PiwgIyMjIyBTdGF0ZRUBIFJlYWRzOiBPKE5Mb2dNKSBnaXZlbiBNIGN1cnJlbnQgY2FuZGlkYXRlcyBhbmQgTiB2b3RlcyBmb3IgYHRhcmdldGAuNCBXcml0ZXM6IE8oMSkwICMgPC93ZWlnaHQ+QHN1Ym1pdF9jYW5kaWRhY3kANHggU3VibWl0IG9uZXNlbGYgZm9yIGNhbmRpZGFjeS4AZCBBIGNhbmRpZGF0ZSB3aWxsIGVpdGhlcjrsICAgLSBMb3NlIGF0IHRoZSBlbmQgb2YgdGhlIHRlcm0gYW5kIGZvcmZlaXQgdGhlaXIgZGVwb3NpdC4tASAgIC0gV2luIGFuZCBiZWNvbWUgYSBtZW1iZXIuIE1lbWJlcnMgd2lsbCBldmVudHVhbGx5IGdldCB0aGVpciBzdGFzaCBiYWNrLlUBICAgLSBCZWNvbWUgYSBydW5uZXItdXAuIFJ1bm5lcnMtdXBzIGFyZSByZXNlcnZlZCBtZW1iZXJzIGluIGNhc2Ugb25lIGdldHMgZm9yY2VmdWxseTQgICAgIHJlbW92ZWQuACwgIyA8d2VpZ2h0PiwgIyMjIyBTdGF0ZYwgUmVhZHM6IE8oTG9nTikgR2l2ZW4gTiBjYW5kaWRhdGVzLjQgV3JpdGVzOiBPKDEpMCAjIDwvd2VpZ2h0PjRyZW1vdmVfbWVtYmVyBAx3aG8cQWRkcmVzczAhASBSZW1vdmUgYSBwYXJ0aWN1bGFyIG1lbWJlciBmcm9tIHRoZSBzZXQuIFRoaXMgaXMgZWZmZWN0aXZlIGltbWVkaWF0ZWx5LgBZASBJZiBhIHJ1bm5lci11cCBpcyBhdmFpbGFibGUsIHRoZW4gdGhlIGJlc3QgcnVubmVyLXVwIHdpbGwgYmUgcmVtb3ZlZCBhbmQgcmVwbGFjZXMgdGhl9CBvdXRnb2luZyBtZW1iZXIuIE90aGVyd2lzZSwgYSBuZXcgcGhyYWdtZW4gcm91bmQgaXMgc3RhcnRlZC4ARQEgTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgYWZmZWN0IHRoZSBkZXNpZ25hdGVkIGJsb2NrIG51bWJlciBvZiB0aGUgbmV4dCBlbGVjdGlvbi4ALCAjIDx3ZWlnaHQ+LCAjIyMjIFN0YXRlWCBSZWFkczogTyhkb19waHJhZ21lbilcIFdyaXRlczogTyhkb19waHJhZ21lbikwICMgPC93ZWlnaHQ+AAAATFRlY2huaWNhbE1lbWJlcnNoaXAAARAoYWRkX21lbWJlcgQMd2hvJEFjY291bnRJZAx8IEFkZCBhIG1lbWJlciBgd2hvYCB0byB0aGUgc2V0LgC0IE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBBZGRPcmlnaW5gIG9yIHJvb3QuNHJlbW92ZV9tZW1iZXIEDHdobyRBY2NvdW50SWQMkCBSZW1vdmUgYSBtZW1iZXIgYHdob2AgZnJvbSB0aGUgc2V0LgDAIE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBSZW1vdmVPcmlnaW5gIG9yIHJvb3QuLHN3YXBfbWVtYmVyCBhyZW1vdmUkQWNjb3VudElkDGFkZCRBY2NvdW50SWQMwCBTd2FwIG91dCBvbmUgbWVtYmVyIGByZW1vdmVgIGZvciBhbm90aGVyIGBhZGRgLgC4IE1heSBvbmx5IGJlIGNhbGxlZCBmcm9tIGBTd2FwT3JpZ2luYCBvciByb290LjRyZXNldF9tZW1iZXJzBBxtZW1iZXJzOFZlYzxBY2NvdW50SWQ+EFkBIENoYW5nZSB0aGUgbWVtYmVyc2hpcCB0byBhIG5ldyBzZXQsIGRpc3JlZ2FyZGluZyB0aGUgZXhpc3RpbmcgbWVtYmVyc2hpcC4gQmUgbmljZSBhbmRsIHBhc3MgYG1lbWJlcnNgIHByZS1zb3J0ZWQuALwgTWF5IG9ubHkgYmUgY2FsbGVkIGZyb20gYFJlc2V0T3JpZ2luYCBvciByb290LgAAACBUcmVhc3VyeQABDDRwcm9wb3NlX3NwZW5kCBR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj4sYmVuZWZpY2lhcnkcQWRkcmVzcyQtASBQdXQgZm9yd2FyZCBhIHN1Z2dlc3Rpb24gZm9yIHNwZW5kaW5nLiBBIGRlcG9zaXQgcHJvcG9ydGlvbmFsIHRvIHRoZSB2YWx1ZTUBIGlzIHJlc2VydmVkIGFuZCBzbGFzaGVkIGlmIHRoZSBwcm9wb3NhbCBpcyByZWplY3RlZC4gSXQgaXMgcmV0dXJuZWQgb25jZSB0aGVUIHByb3Bvc2FsIGlzIGF3YXJkZWQuACwgIyA8d2VpZ2h0PiAgLSBPKDEpLmQgLSBMaW1pdGVkIHN0b3JhZ2UgcmVhZHMulCAtIE9uZSBEQiBjaGFuZ2UsIG9uZSBleHRyYSBEQiBlbnRyeS4wICMgPC93ZWlnaHQ+PHJlamVjdF9wcm9wb3NhbAQscHJvcG9zYWxfaWRYQ29tcGFjdDxQcm9wb3NhbEluZGV4Phz8IFJlamVjdCBhIHByb3Bvc2VkIHNwZW5kLiBUaGUgb3JpZ2luYWwgZGVwb3NpdCB3aWxsIGJlIHNsYXNoZWQuACwgIyA8d2VpZ2h0PiAgLSBPKDEpLmQgLSBMaW1pdGVkIHN0b3JhZ2UgcmVhZHMuQCAtIE9uZSBEQiBjbGVhci4wICMgPC93ZWlnaHQ+QGFwcHJvdmVfcHJvcG9zYWwELHByb3Bvc2FsX2lkWENvbXBhY3Q8UHJvcG9zYWxJbmRleD4gXQEgQXBwcm92ZSBhIHByb3Bvc2FsLiBBdCBhIGxhdGVyIHRpbWUsIHRoZSBwcm9wb3NhbCB3aWxsIGJlIGFsbG9jYXRlZCB0byB0aGUgYmVuZWZpY2lhcnmsIGFuZCB0aGUgb3JpZ2luYWwgZGVwb3NpdCB3aWxsIGJlIHJldHVybmVkLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLkQgLSBPbmUgREIgY2hhbmdlLjAgIyA8L3dlaWdodD4AAAAYQ2xhaW1zAAEEFGNsYWltCBBkZXN0JEFjY291bnRJZEhldGhlcmV1bV9zaWduYXR1cmU4RWNkc2FTaWduYXR1cmUEOCBNYWtlIGEgY2xhaW0uAAAAKFBhcmFjaGFpbnMAAQQkc2V0X2hlYWRzBBRoZWFkc1hWZWM8QXR0ZXN0ZWRDYW5kaWRhdGU+BBUBIFByb3ZpZGUgY2FuZGlkYXRlIHJlY2VpcHRzIGZvciBwYXJhY2hhaW5zLCBpbiBhc2NlbmRpbmcgb3JkZXIgYnkgaWQuAAAAMEF0dGVzdGF0aW9ucwABBERtb3JlX2F0dGVzdGF0aW9ucwQUX21vcmVATW9yZUF0dGVzdGF0aW9ucwQVASBQcm92aWRlIGNhbmRpZGF0ZSByZWNlaXB0cyBmb3IgcGFyYWNoYWlucywgaW4gYXNjZW5kaW5nIG9yZGVyIGJ5IGlkLgAAABRTbG90cwABGCxuZXdfYXVjdGlvbgggZHVyYXRpb25QQ29tcGFjdDxCbG9ja051bWJlcj5IbGVhc2VfcGVyaW9kX2luZGV4WENvbXBhY3Q8TGVhc2VQZXJpb2RPZj4UWCBDcmVhdGUgYSBuZXcgYXVjdGlvbi4AVQEgVGhpcyBjYW4gb25seSBoYXBwZW4gd2hlbiB0aGVyZSBpc24ndCBhbHJlYWR5IGFuIGF1Y3Rpb24gaW4gcHJvZ3Jlc3MgYW5kIG1heSBvbmx5IGJlKQEgY2FsbGVkIGJ5IHRoZSByb290IG9yaWdpbi4gQWNjZXB0cyB0aGUgYGR1cmF0aW9uYCBvZiB0aGlzIGF1Y3Rpb24gYW5kIHRoZV0BIGBsZWFzZV9wZXJpb2RfaW5kZXhgIG9mIHRoZSBpbml0aWFsIGxlYXNlIHBlcmlvZCBvZiB0aGUgZm91ciB0aGF0IGFyZSB0byBiZSBhdWN0aW9uZWQuDGJpZBQMc3ViOENvbXBhY3Q8U3ViSWQ+NGF1Y3Rpb25faW5kZXhUQ29tcGFjdDxBdWN0aW9uSW5kZXg+KGZpcnN0X3Nsb3RYQ29tcGFjdDxMZWFzZVBlcmlvZE9mPiRsYXN0X3Nsb3RYQ29tcGFjdDxMZWFzZVBlcmlvZE9mPhhhbW91bnRIQ29tcGFjdDxCYWxhbmNlT2Y+QE0BIE1ha2UgYSBuZXcgYmlkIGZyb20gYW4gYWNjb3VudCAoaW5jbHVkaW5nIGEgcGFyYWNoYWluIGFjY291bnQpIGZvciBkZXBsb3lpbmcgYSBuZXcsIHBhcmFjaGFpbi4AXQEgTXVsdGlwbGUgc2ltdWx0YW5lb3VzIGJpZHMgZnJvbSB0aGUgc2FtZSBiaWRkZXIgYXJlIGFsbG93ZWQgb25seSBhcyBsb25nIGFzIGFsbCBhY3RpdmVBASBiaWRzIG92ZXJsYXAgZWFjaCBvdGhlciAoaS5lLiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlKS4gQmlkcyBjYW5ub3QgYmUgcmVkYWN0ZWQuAFkBIC0gYHN1YmAgaXMgdGhlIHN1Yi1iaWRkZXIgSUQsIGFsbG93aW5nIGZvciBtdWx0aXBsZSBjb21wZXRpbmcgYmlkcyB0byBiZSBtYWRlIGJ5IChhbmR0IGZ1bmRlZCBieSkgdGhlIHNhbWUgYWNjb3VudC5RASAtIGBhdWN0aW9uX2luZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIGF1Y3Rpb24gdG8gYmlkIG9uLiBTaG91bGQganVzdCBiZSB0aGUgcHJlc2VudGwgdmFsdWUgb2YgYEF1Y3Rpb25Db3VudGVyYC5NASAtIGBmaXJzdF9zbG90YCBpcyB0aGUgZmlyc3QgbGVhc2UgcGVyaW9kIGluZGV4IG9mIHRoZSByYW5nZSB0byBiaWQgb24uIFRoaXMgaXMgdGhlDQEgYWJzb2x1dGUgbGVhc2UgcGVyaW9kIGluZGV4IHZhbHVlLCBub3QgYW4gYXVjdGlvbi1zcGVjaWZpYyBvZmZzZXQuRQEgLSBgbGFzdF9zbG90YCBpcyB0aGUgbGFzdCBsZWFzZSBwZXJpb2QgaW5kZXggb2YgdGhlIHJhbmdlIHRvIGJpZCBvbi4gVGhpcyBpcyB0aGUNASBhYnNvbHV0ZSBsZWFzZSBwZXJpb2QgaW5kZXggdmFsdWUsIG5vdCBhbiBhdWN0aW9uLXNwZWNpZmljIG9mZnNldC5NASAtIGBhbW91bnRgIGlzIHRoZSBhbW91bnQgdG8gYmlkIHRvIGJlIGhlbGQgYXMgZGVwb3NpdCBmb3IgdGhlIHBhcmFjaGFpbiBzaG91bGQgdGhlzCBiaWQgd2luLiBUaGlzIGFtb3VudCBpcyBoZWxkIHRocm91Z2hvdXQgdGhlIHJhbmdlLiRiaWRfcmVuZXcQNGF1Y3Rpb25faW5kZXhUQ29tcGFjdDxBdWN0aW9uSW5kZXg+KGZpcnN0X3Nsb3RYQ29tcGFjdDxMZWFzZVBlcmlvZE9mPiRsYXN0X3Nsb3RYQ29tcGFjdDxMZWFzZVBlcmlvZE9mPhhhbW91bnRIQ29tcGFjdDxCYWxhbmNlT2Y+PFEBIE1ha2UgYSBuZXcgYmlkIGZyb20gYSBwYXJhY2hhaW4gYWNjb3VudCBmb3IgcmVuZXdpbmcgdGhhdCAocHJlLWV4aXN0aW5nKSBwYXJhY2hhaW4uAKggVGhlIG9yaWdpbiAqbXVzdCogYmUgYSBwYXJhY2hhaW4gYWNjb3VudC4AXQEgTXVsdGlwbGUgc2ltdWx0YW5lb3VzIGJpZHMgZnJvbSB0aGUgc2FtZSBiaWRkZXIgYXJlIGFsbG93ZWQgb25seSBhcyBsb25nIGFzIGFsbCBhY3RpdmVBASBiaWRzIG92ZXJsYXAgZWFjaCBvdGhlciAoaS5lLiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlKS4gQmlkcyBjYW5ub3QgYmUgcmVkYWN0ZWQuAFEBIC0gYGF1Y3Rpb25faW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgYXVjdGlvbiB0byBiaWQgb24uIFNob3VsZCBqdXN0IGJlIHRoZSBwcmVzZW50bCB2YWx1ZSBvZiBgQXVjdGlvbkNvdW50ZXJgLk0BIC0gYGZpcnN0X3Nsb3RgIGlzIHRoZSBmaXJzdCBsZWFzZSBwZXJpb2QgaW5kZXggb2YgdGhlIHJhbmdlIHRvIGJpZCBvbi4gVGhpcyBpcyB0aGUNASBhYnNvbHV0ZSBsZWFzZSBwZXJpb2QgaW5kZXggdmFsdWUsIG5vdCBhbiBhdWN0aW9uLXNwZWNpZmljIG9mZnNldC5FASAtIGBsYXN0X3Nsb3RgIGlzIHRoZSBsYXN0IGxlYXNlIHBlcmlvZCBpbmRleCBvZiB0aGUgcmFuZ2UgdG8gYmlkIG9uLiBUaGlzIGlzIHRoZQ0BIGFic29sdXRlIGxlYXNlIHBlcmlvZCBpbmRleCB2YWx1ZSwgbm90IGFuIGF1Y3Rpb24tc3BlY2lmaWMgb2Zmc2V0Lk0BIC0gYGFtb3VudGAgaXMgdGhlIGFtb3VudCB0byBiaWQgdG8gYmUgaGVsZCBhcyBkZXBvc2l0IGZvciB0aGUgcGFyYWNoYWluIHNob3VsZCB0aGXMIGJpZCB3aW4uIFRoaXMgYW1vdW50IGlzIGhlbGQgdGhyb3VnaG91dCB0aGUgcmFuZ2UuPHNldF9vZmZib2FyZGluZwQQZGVzdBxBZGRyZXNzFMggU2V0IHRoZSBvZmYtYm9hcmRpbmcgaW5mb3JtYXRpb24gZm9yIGEgcGFyYWNoYWluLgCoIFRoZSBvcmlnaW4gKm11c3QqIGJlIGEgcGFyYWNoYWluIGFjY291bnQuACEBIC0gYGRlc3RgIGlzIHRoZSBkZXN0aW5hdGlvbiBhY2NvdW50IHRvIHJlY2VpdmUgdGhlIHBhcmFjaGFpbidzIGRlcG9zaXQuPGZpeF9kZXBsb3lfZGF0YRAMc3ViOENvbXBhY3Q8U3ViSWQ+HHBhcmFfaWQ8Q29tcGFjdDxQYXJhSWQ+JGNvZGVfaGFzaBBIYXNoRGluaXRpYWxfaGVhZF9kYXRhFEJ5dGVzHC0BIFNldCB0aGUgZGVwbG95IGluZm9ybWF0aW9uIGZvciBhIHN1Y2Nlc3NmdWwgYmlkIHRvIGRlcGxveSBhIG5ldyBwYXJhY2hhaW4uAMggLSBgb3JpZ2luYCBtdXN0IGJlIHRoZSBzdWNjZXNzZnVsIGJpZGRlciBhY2NvdW50LrAgLSBgc3ViYCBpcyB0aGUgc3ViLWJpZGRlciBJRCBvZiB0aGUgYmlkZGVyLgEBIC0gYHBhcmFfaWRgIGlzIHRoZSBwYXJhY2hhaW4gSUQgYWxsb3R0ZWQgdG8gdGhlIHdpbm5pbmcgYmlkZGVyLh0BIC0gYGNvZGVfaGFzaGAgaXMgdGhlIGhhc2ggb2YgdGhlIHBhcmFjaGFpbidzIFdhc20gdmFsaWRhdGlvbiBmdW5jdGlvbi7wIC0gYGluaXRpYWxfaGVhZF9kYXRhYCBpcyB0aGUgcGFyYWNoYWluJ3MgaW5pdGlhbCBoZWFkIGRhdGEuVGVsYWJvcmF0ZV9kZXBsb3lfZGF0YQgccGFyYV9pZDxDb21wYWN0PFBhcmFJZD4QY29kZRRCeXRlczB0IE5vdGUgYSBuZXcgcGFyYWNoYWluJ3MgY29kZS4ATQEgVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgZml4X2RlcGxveV9kYXRhYCBhbmQgYGNvZGVgIG11c3QgYmUgdGhlIHByZWltYWdlIG9mIHRoZcQgYGNvZGVfaGFzaGAgcGFzc2VkIHRoZXJlIGZvciB0aGUgc2FtZSBgcGFyYV9pZGAuAGEBIFRoaXMgbWF5IGJlIGNhbGxlZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGJlZ2lubmluZyBvZiB0aGUgcGFyYWNoYWluJ3MgZmlyc3QgbGVhc2UgcGVyaW9kLkUBIElmIGNhbGxlZCBiZWZvcmUgdGhlbiB0aGUgcGFyYWNoYWluIHdpbGwgYmVjb21lIGFjdGl2ZSBhdCB0aGUgZmlyc3QgYmxvY2sgb2YgaXRzZQEgc3RhcnRpbmcgbGVhc2UgcGVyaW9kLiBJZiBhZnRlciwgdGhlbiBpdCB3aWxsIGJlY29tZSBhY3RpdmUgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhpcyBjYWxsLgBsIC0gYF9vcmlnaW5gIGlzIGlycmVsZXZhbnQu/CAtIGBwYXJhX2lkYCBpcyB0aGUgcGFyYWNoYWluIElEIHdob3NlIGNvZGUgd2lsbCBiZSBlbGFib3JhdGVkLhUBIC0gYGNvZGVgIGlzIHRoZSBwcmVpbWFnZSBvZiB0aGUgcmVnaXN0ZXJlZCBgY29kZV9oYXNoYCBvZiBgcGFyYV9pZGAuAAAAJFJlZ2lzdHJhcgABHDRyZWdpc3Rlcl9wYXJhEAhpZDxDb21wYWN0PFBhcmFJZD4QaW5mbyBQYXJhSW5mbxBjb2RlFEJ5dGVzRGluaXRpYWxfaGVhZF9kYXRhFEJ5dGVzCJggUmVnaXN0ZXIgYSBwYXJhY2hhaW4gd2l0aCBnaXZlbiBjb2RlLowgRmFpbHMgaWYgZ2l2ZW4gSUQgaXMgYWxyZWFkeSB1c2VkLjxkZXJlZ2lzdGVyX3BhcmEECGlkPENvbXBhY3Q8UGFyYUlkPgSUIERlcmVnaXN0ZXIgYSBwYXJhY2hhaW4gd2l0aCBnaXZlbiBpZEBzZXRfdGhyZWFkX2NvdW50BBRjb3VudAx1MzIUQQEgUmVzZXQgdGhlIG51bWJlciBvZiBwYXJhdGhyZWFkcyB0aGF0IGNhbiBwYXkgdG8gYmUgc2NoZWR1bGVkIGluIGEgc2luZ2xlIGJsb2NrLgCYIC0gYGNvdW50YDogVGhlIG51bWJlciBvZiBwYXJhdGhyZWFkcy4AhCBNdXN0IGJlIGNhbGxlZCBmcm9tIFJvb3Qgb3JpZ2luLkxyZWdpc3Rlcl9wYXJhdGhyZWFkCBBjb2RlFEJ5dGVzRGluaXRpYWxfaGVhZF9kYXRhFEJ5dGVzEKQgUmVnaXN0ZXIgYSBwYXJhdGhyZWFkIGZvciBpbW1lZGlhdGUgdXNlLgBNASBNdXN0IGJlIHNlbnQgZnJvbSBhIFNpZ25lZCBvcmlnaW4gdGhhdCBpcyBhYmxlIHRvIGhhdmUgUGFyYXRocmVhZERlcG9zaXQgcmVzZXJ2ZWQuOQEgYGNvZGVgIGFuZCBgaW5pdGlhbF9oZWFkX2RhdGFgIGFyZSB1c2VkIHRvIGluaXRpYWxpemUgdGhlIHBhcmF0aHJlYWQncyBzdGF0ZS5Ec2VsZWN0X3BhcmF0aHJlYWQMDF9pZDxDb21wYWN0PFBhcmFJZD4kX2NvbGxhdG9yKENvbGxhdG9ySWQoX2hlYWRfaGFzaBBIYXNoFAUBIFBsYWNlIGEgYmlkIGZvciBhIHBhcmF0aHJlYWQgdG8gYmUgcHJvZ3Jlc3NlZCBpbiB0aGUgbmV4dCBibG9jay4AQQEgVGhpcyBpcyBhIGtpbmQgb2Ygc3BlY2lhbCB0cmFuc2FjdGlvbiB0aGF0IHNob3VsZCBieSBoZWF2aWx5IHByaW9yaXRpemVkIGluIHRoZV0BIHRyYW5zYWN0aW9uIHBvb2wgYWNjb3JkaW5nIHRvIHRoZSBgdmFsdWVgOyBvbmx5IGBUaHJlYWRDb3VudGAgb2YgdGhlbSBtYXkgYmUgcHJlc2VudGVkVCBpbiBhbnkgc2luZ2xlIGJsb2NrLlRkZXJlZ2lzdGVyX3BhcmF0aHJlYWQAHMggRGVyZWdpc3RlciBhIHBhcmF0aHJlYWQgYW5kIHJldHJpZXZlIHRoZSBkZXBvc2l0LgAhASBNdXN0IGJlIHNlbnQgZnJvbSBhIGBQYXJhY2hhaW5gIG9yaWdpbiB3aGljaCBpcyBjdXJyZW50bHkgYSBwYXJhdGhyZWFkLgBZASBFbnN1cmUgdGhhdCBiZWZvcmUgY2FsbGluZyB0aGlzIHRoYXQgYW55IGZ1bmRzIHlvdSB3YW50IGVtcHRpZWQgZnJvbSB0aGUgcGFyYXRocmVhZCdzRQEgYWNjb3VudCBpcyBtb3ZlZCBvdXQ7IGFmdGVyIHRoaXMgaXQgd2lsbCBiZSBpbXBvc3NpYmxlIHRvIHJldHJpZXZlIHRoZW0gKHdpdGhvdXRoIGdvdmVybmFuY2UgaW50ZXJ2ZW50aW9uKS4Qc3dhcAQUb3RoZXI8Q29tcGFjdDxQYXJhSWQ+IGUBIFN3YXAgYSBwYXJhY2hhaW4gd2l0aCBhbm90aGVyIHBhcmFjaGFpbiBvciBwYXJhdGhyZWFkLiBUaGUgb3JpZ2luIG11c3QgYmUgYSBgUGFyYWNoYWluYC5lASBUaGUgc3dhcCB3aWxsIGhhcHBlbiBvbmx5IGlmIHRoZXJlIGlzIGFscmVhZHkgYW4gb3Bwb3NpdGUgc3dhcCBwZW5kaW5nLiBJZiB0aGVyZSBpcyBub3QsXQEgdGhlIHN3YXAgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIHBlbmRpbmcgc3dhcHMgbWFwLCByZWFkeSBmb3IgYSBsYXRlciBjb25maXJtYXRvcnkgc3dhcC4AYQEgVGhlIGBQYXJhSWRgcyByZW1haW4gbWFwcGVkIHRvIHRoZSBzYW1lIGhlYWQgZGF0YSBhbmQgY29kZSBzbyBleHRlcm5hbCBjb2RlIGNhbiByZWx5IG9uQQEgYFBhcmFJZGAgdG8gYmUgYSBsb25nLXRlcm0gaWRlbnRpZmllciBvZiBhIG5vdGlvbmFsICJwYXJhY2hhaW4iLiBIb3dldmVyLCB0aGVpclkBIHNjaGVkdWxpbmcgaW5mbyAoaS5lLiB3aGV0aGVyIHRoZXkncmUgYSBwYXJhdGhyZWFkIG9yIHBhcmFjaGFpbiksIGF1Y3Rpb24gaW5mb3JtYXRpb26YIGFuZCB0aGUgYXVjdGlvbiBkZXBvc2l0IGFyZSBzd2l0Y2hlZC4AAAAQU3VkbwABDBBzdWRvBCBwcm9wb3NhbCBQcm9wb3NhbCg5ASBBdXRoZW50aWNhdGVzIHRoZSBzdWRvIGtleSBhbmQgZGlzcGF0Y2hlcyBhIGZ1bmN0aW9uIGNhbGwgd2l0aCBgUm9vdGAgb3JpZ2luLgDQIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLmAgLSBPbmUgREIgd3JpdGUgKGV2ZW50KS7UIC0gVW5rbm93biB3ZWlnaHQgb2YgZGVyaXZhdGl2ZSBgcHJvcG9zYWxgIGV4ZWN1dGlvbi4wICMgPC93ZWlnaHQ+HHNldF9rZXkEDG5ldxxBZGRyZXNzJHUBIEF1dGhlbnRpY2F0ZXMgdGhlIGN1cnJlbnQgc3VkbyBrZXkgYW5kIHNldHMgdGhlIGdpdmVuIEFjY291bnRJZCAoYG5ld2ApIGFzIHRoZSBuZXcgc3VkbyBrZXkuANAgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1NpZ25lZF8uACwgIyA8d2VpZ2h0PiAgLSBPKDEpLmQgLSBMaW1pdGVkIHN0b3JhZ2UgcmVhZHMuRCAtIE9uZSBEQiBjaGFuZ2UuMCAjIDwvd2VpZ2h0PhxzdWRvX2FzCAx3aG8cQWRkcmVzcyBwcm9wb3NhbCBQcm9wb3NhbCxRASBBdXRoZW50aWNhdGVzIHRoZSBzdWRvIGtleSBhbmQgZGlzcGF0Y2hlcyBhIGZ1bmN0aW9uIGNhbGwgd2l0aCBgU2lnbmVkYCBvcmlnaW4gZnJvbUQgYSBnaXZlbiBhY2NvdW50LgDQIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gTGltaXRlZCBzdG9yYWdlIHJlYWRzLmAgLSBPbmUgREIgd3JpdGUgKGV2ZW50KS7UIC0gVW5rbm93biB3ZWlnaHQgb2YgZGVyaXZhdGl2ZSBgcHJvcG9zYWxgIGV4ZWN1dGlvbi4wICMgPC93ZWlnaHQ+AAAAFE5pY2tzAAEQIHNldF9uYW1lBBBuYW1lFEJ5dGVzQF0BIFNldCBhbiBhY2NvdW50J3MgbmFtZS4gVGhlIG5hbWUgc2hvdWxkIGJlIGEgVVRGLTgtZW5jb2RlZCBzdHJpbmcgYnkgY29udmVudGlvbiwgdGhvdWdoTCB3ZSBkb24ndCBjaGVjayBpdC4AYQEgVGhlIG5hbWUgbWF5IG5vdCBiZSBtb3JlIHRoYW4gYFQ6Ok1heExlbmd0aGAgYnl0ZXMsIG5vciBsZXNzIHRoYW4gYFQ6Ok1pbkxlbmd0aGAgYnl0ZXMuAF0BIElmIHRoZSBhY2NvdW50IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGEgbmFtZSwgdGhlbiBhIGZlZSBvZiBgUmVzZXJ2YXRpb25GZWVgIGlzIHJlc2VydmVkQCBpbiB0aGUgYWNjb3VudC4A0CBUaGUgZGlzcGF0Y2ggb3JpZ2luIGZvciB0aGlzIGNhbGwgbXVzdCBiZSBfU2lnbmVkXy4ALCAjIDx3ZWlnaHQ+ICAtIE8oMSkuhCAtIEF0IG1vc3Qgb25lIGJhbGFuY2Ugb3BlcmF0aW9uLmggLSBPbmUgc3RvcmFnZSByZWFkL3dyaXRlLjQgLSBPbmUgZXZlbnQuMCAjIDwvd2VpZ2h0PihjbGVhcl9uYW1lAChRASBDbGVhciBhbiBhY2NvdW50J3MgbmFtZSBhbmQgcmV0dXJuIHRoZSBkZXBvc2l0LiBGYWlscyBpZiB0aGUgYWNjb3VudCB3YXMgbm90IG5hbWVkLgDQIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9TaWduZWRfLgAsICMgPHdlaWdodD4gIC0gTygxKS5kIC0gT25lIGJhbGFuY2Ugb3BlcmF0aW9uLmggLSBPbmUgc3RvcmFnZSByZWFkL3dyaXRlLjQgLSBPbmUgZXZlbnQuMCAjIDwvd2VpZ2h0PiRraWxsX25hbWUEGHRhcmdldBxBZGRyZXNzNOQgUmVtb3ZlIGFuIGFjY291bnQncyBuYW1lIGFuZCB0YWtlIGNoYXJnZSBvZiB0aGUgZGVwb3NpdC4ASQEgRmFpbHMgaWYgYHdob2AgaGFzIG5vdCBiZWVuIG5hbWVkLiBUaGUgZGVwb3NpdCBpcyBkZWFsdCB3aXRoIHRocm91Z2ggYFQ6OlNsYXNoZWRgTCBpbWJhbGFuY2UgaGFuZGxlci4AMQEgVGhlIGRpc3BhdGNoIG9yaWdpbiBmb3IgdGhpcyBjYWxsIG11c3QgYmUgX1Jvb3RfIG9yIG1hdGNoIGBUOjpGb3JjZU9yaWdpbmAuACwgIyA8d2VpZ2h0PiAgLSBPKDEpLtwgLSBPbmUgdW5iYWxhbmNlZCBoYW5kbGVyIChwcm9iYWJseSBhIGJhbGFuY2UgdHJhbnNmZXIpaCAtIE9uZSBzdG9yYWdlIHJlYWQvd3JpdGUuNCAtIE9uZSBldmVudC4wICMgPC93ZWlnaHQ+KGZvcmNlX25hbWUIGHRhcmdldBxBZGRyZXNzEG5hbWUUQnl0ZXMwyCBTZXQgYSB0aGlyZC1wYXJ0eSBhY2NvdW50J3MgbmFtZSB3aXRoIG5vIGRlcG9zaXQuAKAgTm8gbGVuZ3RoIGNoZWNraW5nIGlzIGRvbmUgb24gdGhlIG5hbWUuADEBIFRoZSBkaXNwYXRjaCBvcmlnaW4gZm9yIHRoaXMgY2FsbCBtdXN0IGJlIF9Sb290XyBvciBtYXRjaCBgVDo6Rm9yY2VPcmlnaW5gLgAsICMgPHdlaWdodD4gIC0gTygxKS6EIC0gQXQgbW9zdCBvbmUgYmFsYW5jZSBvcGVyYXRpb24uaCAtIE9uZSBzdG9yYWdlIHJlYWQvd3JpdGUuNCAtIE9uZSBldmVudC4wICMgPC93ZWlnaHQ+AAAA';

export default meta;
