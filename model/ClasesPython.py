from unicodedata import name


class Persona():
    def __init__(self, id, nombre, apellido, email, password, foto_perfil):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.password = password
        self.foto_perfil = foto_perfil
        
    #def login(self):
        #Acá va el código

    # def registrarse(self):
        #Acá va el código
        
    #def cerrarSesion(self):
        #Acá va el código

   # def borrarCuentaself):
        #Acá va el código
        
    
class UsuarioCliente(Persona):
    def __init__(self, id, nombre, apellido, email, password, foto_perfil, cant_contr):
        super().__init__(id, nombre, apellido, email, password, foto_perfil)
        self.cant_contr = cant_contr
        
        
    # def contratar(self):
        #Acá va el código
        
    # def valorarProfesional(self):
        #Acá va el código
        
        

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
        #agregar como atributo la Clase UsuarioCliente
        
    # def calcularValoracion(self):
        #Acá va el código
        

class Contratacion():
    def __init__(self, id, fecha, comentario):
        self.id = id
        self.fecha = fecha
        self.comentario = comentario
        #agregar como atributo la Clase UsuarioCliente
        #agregar como atributo la Clase UsuarioProfesional
        

        
