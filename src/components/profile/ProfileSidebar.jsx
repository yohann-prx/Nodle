import React from 'react';
import { 
  User, Info, Lock, Bell, CreditCard, Moon, 
  MessageSquare, ThumbsUp, Users, Eye, RotateCcw, Trash, LogOut 
} from 'lucide-react';

const ProfileSidebar = () => {
    return (
      <aside className="w-64 flex-shrink-0">
        <div className="bg-white p-4 rounded-lg mb-4">
          <h2 className="font-medium text-gray-500 text-sm mb-3">Compte</h2>
          <nav>
            <a href="#" className="sidebar-link active">
              <User className="h-4 w-4" />
              <span>Votre profil</span>
            </a>
            <a href="#" className="sidebar-link">
              <Info className="h-4 w-4" />
              <span>Vos informations</span>
            </a>
            <a href="#" className="sidebar-link">
              <Lock className="h-4 w-4" />
              <span>Confidentialité</span>
            </a>
            <a href="#" className="sidebar-link">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </a>
            <a href="#" className="sidebar-link">
              <CreditCard className="h-4 w-4" />
              <span>Paiements</span>
            </a>
            <a href="#" className="sidebar-link">
              <Moon className="h-4 w-4" />
              <span>Thème (sombre)</span>
            </a>
          </nav>
        </div>
        
        <div className="bg-white p-4 rounded-lg mb-4">
          <h2 className="font-medium text-gray-500 text-sm mb-3">Une question ?</h2>
          <nav>
            <a href="#" className="sidebar-link">
              <MessageSquare className="h-4 w-4" />
              <span>Nous contacter</span>
            </a>
            <a href="#" className="sidebar-link">
              <ThumbsUp className="h-4 w-4" />
              <span>Feedback</span>
            </a>
          </nav>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-medium text-gray-500 text-sm mb-3">Autres</h2>
          <nav>
            <a href="#" className="sidebar-link">
              <Users className="h-4 w-4" />
              <span>Utilisateurs bloqués</span>
            </a>
            <a href="#" className="sidebar-link">
              <Eye className="h-4 w-4 text-gray-600" />
              <span>Catégories masquées</span>
            </a>
            <a href="#" className="sidebar-link">
              <RotateCcw className="h-4 w-4" />
              <span>Réinitialiser la veille</span>
            </a>
            <a href="#" className="sidebar-link text-error-dark">
              <Trash className="h-4 w-4" />
              <span>Supprimer votre compte</span>
            </a>
            <a href="#" className="sidebar-link text-gray-600">
              <LogOut className="h-4 w-4" />
              <span>Se déconnecter</span>
            </a>
          </nav>
        </div>
      </aside>
    );
  };
  
  export default ProfileSidebar;