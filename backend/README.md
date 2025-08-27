# OccasionSuper Backend

Auth backend using Express + Mongoose.

## Setup

1) Create `backend/.env`:
```
PORT=4000
DATABASE_URL=your-mongodb-uri
JWT_SECRET=your-strong-secret
```

2) Install and run:
```
cd backend
npm i
node src/index.js
```
(Optional) with nodemon:
```
npm i -D nodemon
npx nodemon src/index.js
```

Base URL: `http://localhost:4000`

## Endpoints

### Roles & Models

- Roles: `admin`, `vendor`, `customer`
- Single `User` collection stores auth data and `role`.
- `Vendor` collection stores vendor-specific profile and verification fields.
- `Customer` collection is available for customer-specific data.

### POST /api/auth/register (Admin-only: creates vendor users)
Headers: `Content-Type: application/json`, `Authorization: Bearer <admin_token>`

Body:
```
{
  "firstName": "John",
  "lastName": "Doe",
  "middleName": "M",               
  "email": "john@example.com",
  "phoneNumber": "+11234567890",
  "whatsAppNumber": "+11234567890",
  "address1": "Lagos State",
  "address2": "Ikeja Street",
  "address3": "Block A, House 12",
  "address4": "Near City Mall",
  "password": "secret123",
  "confirmPassword": "secret123",
  "termsAccepted": true
}
```

Responses:
- 201 Created → token + user (role is `vendor`)
- 400 Validation errors
- 409 Email already registered
- 401/403 if not authenticated as admin

### POST /api/auth/login (role required)
Headers: `Content-Type: application/json`

Body:
```
{
  "email": "john@example.com",
  "password": "secret123",
  "role": "vendor" // required: must match stored role
}
```

Responses:
- 200 OK → token + user
- 401 Invalid credentials
- 403 Role mismatch (when role doesn't match user's stored role)

### Vendor Endpoints

All vendor profile submissions are created/updated by the logged-in vendor and are unverified by default until an admin verifies.

#### POST /api/vendors/me (Vendor: submit/update own profile)
Headers: `Content-Type: application/json`, `Authorization: Bearer <vendor_token>`

Body:
```
{
  "images": ["https://...", "https://..."],
  "name": "Your Business Name",
  "email": "vendor@example.com",
  "category": "photography",
  "state": "Lagos",
  "description": "We provide ...",
  "price": 5000
}
```

Responses:
- 200 OK → `{ message, vendor }` (sets `verified_vendor=false`)
- 400 Validation errors
- 401/403 if not authenticated as vendor

#### POST /api/vendors/verify (Admin: verify/unverify a vendor)
Headers: `Content-Type: application/json`, `Authorization: Bearer <admin_token>`

Body:
```
{
  "vendorUserId": "<User._id of vendor>",
  "verified": true
}
```

Responses:
- 200 OK → `{ message, vendor }` (sets `verified_vendor`, `verifiedBy`, `verifiedAt`)
- 400 Validation errors
- 401/403 if not authenticated as admin
- 404 Vendor profile not found

#### GET /api/vendors/:userId (Public: get verified vendor profile)
Responses:
- 200 OK → `{ vendor }` (only if `verified_vendor=true`)
- 404 Verified vendor not found

## Test with Postman

1) Create a Collection (e.g., "OccasionSuper Backend").
2) Add Collection variable:
   - Key: `base_url`
   - Value: `http://localhost:4000`
3) Request: Login (Admin)
   - POST `{{base_url}}/api/auth/login`
   - Headers: `Content-Type: application/json`
   - Body: raw JSON (use sample above)
4) Save token automatically (Tests tab):
```
pm.test("Status 200/201", function () {
  pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});

pm.test("Has token", function () {
  const json = pm.response.json();
  pm.expect(json).to.have.property("token");
});
```
Set collection variable:
```
const json = pm.response.json();
if (json.token) {
  pm.collectionVariables.set("auth_token", json.token);
}
```
Use later as header: `Authorization: Bearer {{auth_token}}`.

5) Create Vendor (Admin-only register)
   - POST `{{base_url}}/api/auth/register`
   - Headers: `Content-Type: application/json`, `Authorization: Bearer {{auth_token}}`
   - Body: vendor user fields (see above)

6) Vendor Login
   - POST `{{base_url}}/api/auth/login`
   - Body includes `role` (e.g., `"vendor"`)
   - Save vendor token to `vendor_token`

7) Vendor submits profile
   - POST `{{base_url}}/api/vendors/me`
   - Headers: `Authorization: Bearer {{vendor_token}}`
   - Body: see vendor profile body above

8) Admin verifies vendor
   - POST `{{base_url}}/api/vendors/verify`
   - Headers: `Authorization: Bearer {{auth_token}}`
   - Body: `{ "vendorUserId": "<id>", "verified": true }`

## cURL

Register:
```
curl -X POST "http://localhost:4000/api/auth/register" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <admin_token>" \
  -d '{
    "firstName":"John",
    "lastName":"Doe",
    "email":"john@example.com",
    "phoneNumber":"+11234567890",
    "address1":"Lagos State",
    "address2":"Ikeja Street",
    "address3":"Block A, House 12",
    "password":"secret123",
    "confirmPassword":"secret123",
    "termsAccepted":true
  }'
```

Login:
```
curl -X POST "http://localhost:4000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email":"john@example.com",
    "password":"secret123",
    "role":"vendor"
  }'
```

Vendor submit profile:
```
curl -X POST "http://localhost:4000/api/vendors/me" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <vendor_token>" \
  -d '{
    "images":["https://img1","https://img2"],
    "name":"My Studio",
    "email":"vendor@example.com",
    "category":"photography",
    "state":"Lagos",
    "description":"We shoot weddings",
    "price":5000
  }'
```

Admin verify vendor:
```
curl -X POST "http://localhost:4000/api/vendors/verify" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <admin_token>" \
  -d '{
    "vendorUserId":"<id>",
    "verified":true
  }'
```

Notes: Passwords are hashed with bcrypt; JWT expires in 7 days; JWT payload includes `id` and `role`.
