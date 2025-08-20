import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Globe, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotebooks } from '@/hooks/useNotebooks';
const EmptyDashboard = () => {
  const navigate = useNavigate();
  const {
    createNotebook,
    isCreating
  } = useNotebooks();
  const handleCreateNotebook = () => {
    console.log('Create notebook button clicked');
    console.log('isCreating:', isCreating);
    createNotebook({
      title: 'Untitled notebook',
      description: ''
    }, {
      onSuccess: data => {
        console.log('Navigating to notebook:', data.id);
        navigate(`/notebook/${data.id}`);
      },
      onError: error => {
        console.error('Failed to create notebook:', error);
      }
    });
  };
  return <div className="text-center py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-medium font-heading text-foreground mb-4">Create your first notebook</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">AtkinsLM is an AI-powered research and writing assistant that works best with the sources you upload</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium font-heading text-foreground mb-2">PDFs</h3>
          <p className="text-muted-foreground">Upload research papers, reports, and documents</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium font-heading text-foreground mb-2">Websites</h3>
          <p className="text-muted-foreground">Add web pages and online articles as sources</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium font-heading text-foreground mb-2">Audio</h3>
          <p className="text-muted-foreground">Include multimedia content in your research</p>
        </div>
      </div>

      <Button onClick={handleCreateNotebook} size="lg" className="bg-primary hover:bg-primary/90" disabled={isCreating}>
        <Upload className="h-5 w-5 mr-2" />
        {isCreating ? 'Creating...' : 'Create notebook'}
      </Button>
    </div>;
};
export default EmptyDashboard;