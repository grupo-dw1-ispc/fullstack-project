class Persona():
    def __init__(self, id, nombre, apellido, email, password, foto_perfil):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.password = password
        self.foto_perfil = foto_perfil

# Definimos los "setters"
    def setId(self, id):
        self.id = id

    def setNombre(self, nombre):
        self.nombre = nombre

    def setApellido(self, apellido):
        self.apellido = apellido

    def setEmail(self, email):
        self.email = email

    def setPassword(self, password):
        self.password = password

    def setFoto_perfil(self, foto_perfil):
        self.foto_perfil = foto_perfil


# Definimos los "getters"


    def getId(self):
        return self.id
    
    def getNombre(self):
        return self.nombre

    def getApellido(self):
        return self.apellido

    def getEmail(self):
        return self.email

    def getPassword(self):
        return self.password

    def getFoto_perfil(self):
        return self.foto_perfil

