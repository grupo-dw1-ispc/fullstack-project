class Contratacion():
    def __init__(self, id, fecha, comentario):
        self.id = id
        self.fecha = fecha
        self.comentario = comentario

# Definimos los "setters"
    def setId(self, id):
        self.id = id

    def setFecha(self, fecha):
        self.fecha = fecha

    def setComentario(self, comentario):
        self.comentario = comentario


# Definimos los "getters"


    def getId(self):
        return self.id
    
    def getFecha(self):
        return self.fecha

    def getComentario(self):
        return self.comentario
