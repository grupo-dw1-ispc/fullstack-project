from PersonaEntity import Persona


class UsuarioCliente(Persona):
    def __init__(self, id, nombre, apellido, email, password, foto_perfil, cant_contr):
        super().__init__(id, nombre, apellido, email, password, foto_perfil)
        self.cant_contr = cant_contr

        self.cant_contr = cant_contr

# Definimos los "setters"
    def setCant_contr(self, cant_contr):
        self.tcant_contr = cant_contr

# Definimos los "getters"

    def getCant_contr(self):
        return self.cant_contr
