from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TransactionViewSet, UserProfileViewSet, CardViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'transactions', TransactionViewSet, basename='transaction')
router.register(r'profiles', UserProfileViewSet, basename='profile')
router.register(r'cards', CardViewSet, basename='card')

urlpatterns = [
    path('', include(router.urls)),
]