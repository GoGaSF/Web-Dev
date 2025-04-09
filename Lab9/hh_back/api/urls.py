
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, VacancyViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
