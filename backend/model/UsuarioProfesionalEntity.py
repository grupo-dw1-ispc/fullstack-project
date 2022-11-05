from PersonaEntity import Persona

class UsuarioProfesional(Persona):
    def __init__(self, id, nombre, apellido, email, password, foto_perfil, telefono, localidad, provincia, descripcion,
                 valoracion, profesion, calif_obt):
        super().__init__(id, nombre, apellido, email, password, foto_perfil)
        self.telefono = telefono
        self.localidad = localidad
        self.provincia = provincia
        self.descripcion = descripcion
        self.valoracion = valoracion
        self.profesion = profesion
        self.calif_obt = calif_obt

# Definimos los "setters"
    def setTelefono(self, telefono):
        self.telefono = telefono

    def setLocalidad(self, localidad):
        self.localidad = localidad

    def setProvincia(self, provincia):
        self.aprovincia = provincia

    def setDescripcion(self, descripcion):
        self.descripcion = descripcion

    def setValoracion(self, valoracion):
        self.valoracion = valoracion

    def setProfesion(self, profesion):
        self.profesion = profesion
        
    def setCalif_obt(self, calif_obt):
        self.calif_obt = calif_obt



# Definimos los "getters"


    def getTelefono(self):
        return self.telefono
    
    def getLocalidad(self):
        return self.localidad

    def getProvincia(self):
        return self.provincia
    
    def getLocalidad(self):
        return self.localidad

    def getDescripcion(self):
        return self.descripcion


    def getValoracion(self):
        return self.valoracion

    def getProfesion(self):
        return self.profesion
    
    def getCalif_obt(self):
        return self.calif_obt


