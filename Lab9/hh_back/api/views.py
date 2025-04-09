from rest_framework import viewsets
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True, methods=['get'])
    def vacancies(self, request, pk=None):
        company = self.get_object()
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False, methods=['get'])
    def top_ten(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
