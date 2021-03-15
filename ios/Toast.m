#import "ToastView.h"
#import "Toast.h"

@implementation Toast

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show : (NSDictionary *)options callback : (RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [ToastView showWithOptions:options
                          andCallback:^{
                            callback(@[ [NSNull null], [NSNull null] ]);
                          }];
    });
}

RCT_EXPORT_METHOD(dismiss) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [ToastView dismiss];
    });
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    return @{
        @"LENGTH_SHORT" : @-1,
        @"LENGTH_LONG" : @-2,
        @"LENGTH_INDEFINITE" : @0,
    };
}

@end
