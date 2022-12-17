from rest_framework import serializers
from loginPage.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id_usuario', 'nombre', 'telefono','correo_electronico', 'estado_usuario','id_tipo_usuario','contrasena']

