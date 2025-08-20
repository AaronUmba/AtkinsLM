@@ .. @@
   return (
-    <div className={`flex flex-col h-full overflow-hidden ${className}`}>
+    <div className={`flex flex-col h-full overflow-hidden bg-sidebar ${className}`}>
       {/* Header */}
-      <div className="p-4 border-b border-gray-200 flex-shrink-0">
+      <div className="p-4 border-b border-sidebar-border flex-shrink-0">
         <div className="flex items-center space-x-2 mb-2">
-          <div className="w-6 h-6 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
+          <div className="w-6 h-6 bg-card rounded border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
             {getSourceIcon(citation.source_type)}
           </div>
-          <span className="font-medium text-gray-900 truncate">{citation.source_title}</span>
+          <span className="font-medium font-heading text-sidebar-foreground truncate">{citation.source_title}</span>
         </div>
       </div>
 
       {/* Source Guide Accordion */}
       {sourceSummary && (
-        <div className="border-b border-gray-200 flex-shrink-0">
+        <div className="border-b border-sidebar-border flex-shrink-0">
           <Accordion type="single" value={accordionValue} onValueChange={setAccordionValue} collapsible>
             <AccordionItem value="guide" className="border-0">
               <AccordionTrigger 
-                className="px-4 py-3 text-sm font-medium hover:no-underline hover:bg-blue-50" 
-                style={{ color: '#234776' }}
-                chevronColor="#234776"
+                className="px-4 py-3 text-sm font-medium hover:no-underline hover:bg-sidebar-accent" 
+                style={{ color: 'hsl(var(--primary))' }}
+                chevronColor="hsl(var(--primary))"
               >
                 <div className="flex items-center space-x-2">
-                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#234776">
+                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="hsl(var(--primary))">
                     <path d="M166.67-120.67 120-167.33l317.67-318L254-531l194-121-16.33-228 175 147L818-818.33l-85.67 211.66L880-432l-228.67-16.67-120.66 194L485-438.33 166.67-120.67Zm24.66-536L120-728l72-72 71.33 71.33-72 72Zm366.34 233 58-94.33 111 8.33-72-85 41.66-102.66-102.66 41.66-85-71.66L517-616.67l-94.33 59 108 26.67 27 107.33Zm171 303.67-71.34-72 71.34-71.33 71.33 72L728.67-120ZM575-576Z"/>
                   </svg>
                   <span>Source guide</span>
                 </div>
               </AccordionTrigger>
               <AccordionContent className="px-4 pb-4">
-                <div className="text-sm text-gray-700 space-y-4">
+                <div className="text-sm text-sidebar-foreground space-y-4">
                   <div>
                     <h4 className="font-medium mb-2">Summary</h4>
                     <p className="leading-relaxed">{sourceSummary}</p>
                   </div>
                   
                   {/* Show URL for website sources */}
                   {citation.source_type === 'website' && sourceUrl && (
                     <div>
                       <h4 className="font-medium mb-2">URL</h4>
                       <a 
                         href={sourceUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
-                        className="text-blue-600 hover:text-blue-800 hover:underline break-all text-sm"
+                        className="text-primary hover:text-primary/80 hover:underline break-all text-sm"
                       >
                         {sourceUrl}
                       </a>
                     </div>
                   )}
                 </div>
               </AccordionContent>
             </AccordionItem>
           </Accordion>
         </div>
       )}
 
       {/* Content */}
       <ScrollArea className="flex-1 h-full" ref={scrollAreaViewportRef}>
         <div className="p-4">
           <div className="prose prose-gray max-w-none space-y-1">
             {renderHighlightedContent()}
           </div>
         </div>
       </ScrollArea>
     </div>
   );
 };