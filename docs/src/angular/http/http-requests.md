---
outline: deep
---

# Peticiones HTTP

## Servicio

```ts
/**
 * http.service.ts
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private apiUrl: string = environment.API_USERS_URL;

    constructor(private http: HttpClient) { }
}

```
## Métodos
### GET

```ts
/**
 * Obtiene la lista de usuarios.
 * @returns {Observable<User[]>} Observable que emite una lista de usuarios.
 */
getUsers() {
    const url = `${this.apiUrl}/user`;
    return this.http.get<User[]>(url)
  }
```

### POST

```ts
/**
 * Crea un nuevo usuario.
 * @param {User} newUser - Datos del nuevo usuario.
 * @returns {Observable<User>} Observable que emite el nuevo usuario creado.
 */
createUser(newUser: User) {
    const url = `${this.apiUrl}/user`;
    return this.http.post<User>(url, user);
}
```

### PUT

```ts
/**
 * Actualiza un usuario existente.
 * @param {User} user - Datos actualizados del usuario.
 * @param {number} id - Identificador del usuario a actualizar.
 * @returns {Observable<User>} Observable que emite el usuario actualizado.
 */
updateUser(user: User, id: number) {
    const url = `${this.apiUrl}/user/${id}`;
    return this.http.put<User>(url, newUser);
};
```

### DELETE

```ts
/**
 * Elimina un usuario existente.
 * @param {number} id - Identificador del usuario a eliminar.
 * @returns {Observable<UserResponse>} Observable que emite la respuesta de la eliminación.
 */
deleteUSer(id: number) {
    const url = `${this.apiUrl}/user/${id}`;
    return this.http.delete<UserResponse>(url);
};
```
