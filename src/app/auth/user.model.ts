




export class User {
    constructor(public email:string,
                public id:string,
                private _token: string,
                private _tokenExpirationDate: Date
                ) {}


    get token(): string | null {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    public isTokenNotExpired() {
        return new Date() < this._tokenExpirationDate;
    }
}



/*
{
    "kind": "identitytoolkit#VerifyPasswordResponse",
    "localId": "8z6G0pBqoHOTTjOAIhJ71ZLYiay2",
    "email": "test@test.test",
    "displayName": "",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlMDVlZmMyNTM2YjJjZTdjNTExZjRiMTcyN2I4NTkyYTc5ZWJiN2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVjaXBlLWFwcC10ZXN0LWFlOWRkIiwiYXVkIjoicmVjaXBlLWFwcC10ZXN0LWFlOWRkIiwiYXV0aF90aW1lIjoxNjI4NTM2MjI5LCJ1c2VyX2lkIjoiOHo2RzBwQnFvSE9UVGpPQUloSjcxWkxZaWF5MiIsInN1YiI6Ijh6NkcwcEJxb0hPVFRqT0FJaEo3MVpMWWlheTIiLCJpYXQiOjE2Mjg1MzYyMjksImV4cCI6MTYyODUzOTgyOSwiZW1haWwiOiJ0ZXN0QHRlc3QudGVzdCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QudGVzdCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cWoPxNy0mDG1oU7xxvs0UQU0_v1wzJPkQk7ILzatEE4euSyMKQTtlJXc2ygTLOpCvMFztv7sbLv6QfHKFxz7qdp__CCgu7w8pqcv1TfUqW8eBX_aE59VLdwDYfS6_cmu5KUV4hHS_-QWFltTvLXgEWeSJ2YSFgOUjxPD3OyxAEAAMW27lHELDlhX8aVa1J3pKjRl2u_zF4DmXhCx2sHWJrmgdrM4JhTBH4rBJlFwPO7XhCaRnHtE-F9xp7bCl4A3UZWmsMGk-vHGGsQ7Pr8C4D2oHFDNK_tcd3ghDnFTvBUWjstVS9qvgpn6KeCVxpyhLXi4SgPtg4E5ifJL2Oh7mg",
    "registered": true,
    "refreshToken": "ACzBnCi45NWzzGLnjw1fERnHGrUYXOAShvWMUUt2cnpqHlwdtxc1WePsoU2OXkvQfwH1jzFjwQD4veGrNGJZlZltZLt7vHtAOdIsphEBH0gcmL0dts350fc0bTNOPKYOYW5bBQUHfD4OsZvtOvBfsxtKMCXN4s_owKB_hc-SWXp_L7V-tOuEQtCm9R2SBG5mzaLbTOYzJa5e94ELHo8fC2F6bqziJxUu0A",
    "expiresIn": "3600"
}*/
