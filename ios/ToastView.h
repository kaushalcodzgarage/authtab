#import <UIKit/UIKit.h>

@interface ToastView : UIView

+ (void)showWithOptions:(NSDictionary *)options andCallback:(void (^)())callback;
+ (void)dismiss;

@end
